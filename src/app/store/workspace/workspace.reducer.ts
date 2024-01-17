import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const { dialog } = require('@electron/remote');
import { storage } from '../../../api/storage'

export const initialState = {
	path: "",
	projects: [],
} as Workspace

export const changeWorkspace = createAsyncThunk(
  'workspace/changeWorkspace',
  async (arg, thunkAPI) => {
    dialog.showOpenDialog({ properties: ['openDirectory'] })
			.then((result: { canceled: any; filePaths: any[]; }) => {
				console.log("result: " + JSON.stringify(result));
				if (!result.canceled) {
					var path = result.filePaths[0];
					thunkAPI.dispatch(setPath(path))
					thunkAPI.dispatch(loadProjects());
					let state:any = thunkAPI.getState()
					storage.saveWorkspace(state.workspace.path)
			}
		});
  }
)

export const loadProjects = createAsyncThunk(
	'workspace/loadProjects',
	async(arg, thunkAPI) => {
		let state:any = thunkAPI.getState()
		let projects:Array<Project> = storage.getProjects(state);
		projects.forEach(project => {
			if(project.title === state.appState.current_project) {
				project.isCurrentlyOpen = true
			}
		});
		thunkAPI.dispatch(setProjects(projects));
	}
);

const workspaceSlice = createSlice({
	name: 'workspace',
	initialState,
	reducers: {
		setPath(state, action) {
			state.path = action.payload
		},
		setProjects(state, action) {
			state.projects = action.payload
		}
	}
})
// Extract the action creators object and the reducer
const { actions, reducer } = workspaceSlice
// Extract and export each action creator by name
export const { setPath, setProjects } = actions

export default reducer
