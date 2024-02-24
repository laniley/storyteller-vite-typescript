import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { storage } from '../../../api/appStateAPI'
import * as workspaceReducer from '../workspace/workspace.reducer'
import { TabId } from '@blueprintjs/core'

const { dialog } = require('@electron/remote');

export const initialState = {
	theme: "bp5-dark",
	workspace: "",
	current_project_title: "",
	current_project_path: ""
} as AppState

export const changeWorkspace = createAsyncThunk(
  'appState/changeWorkspace',
  async (arg, thunkAPI) => {
    dialog.showOpenDialog({ properties: ['openDirectory'] })
			.then((result: { canceled: any; filePaths: any[]; }) => {
				console.log("result: " + JSON.stringify(result));
				if (!result.canceled) {
					var path = result.filePaths[0];
					thunkAPI.dispatch(setWorkspace(path))
					thunkAPI.dispatch(workspaceReducer.loadProjects());
					let state:any = thunkAPI.getState()
					storage.saveWorkspace(state.appState.workspace)
			}
		});
  }
)

export const changeCurrentProject = createAsyncThunk(
  'appState/changeCurrentProject',
  async (data:{ title:string, path:string }, thunkAPI) => {
    thunkAPI.dispatch(setCurrentProjectTitle(data.title))
		thunkAPI.dispatch(setCurrentProjectPath(data.path))
		storage.saveCurrentProjectTitle(data.title)
		storage.saveCurrentProjectPath(data.path)
  }
)

export const changeCurrentRootRoute = createAsyncThunk(
  'appState/changeCurrentRootRoute',
  async (navbarTabId:TabId, thunkAPI) => {
		console.log("Changing the current root route...")
		let state:any = thunkAPI.getState()
		console.log(state)
		thunkAPI.dispatch(setRoute(navbarTabId))
		state = thunkAPI.getState()
		storage.save(state.appState);
  }
)

const appStateSlice = createSlice({
	name: 'appState',
	initialState,
	reducers: {
		setRoute(state, action) {
			state.route = action.payload
		},
		setTheme(state, action) {
			state.theme = action.payload
		},
		setWorkspace(state, action) {
			state.workspace = action.payload
		},
		setCurrentProjectTitle(state, action) {
			state.current_project_title = action.payload
		},
		setCurrentProjectPath(state, action) {
			state.current_project_path = action.payload
		}
	}
})

// Extract the action creators object and the reducer
const { actions, reducer } = appStateSlice
// Extract and export each action creator by name
export const {
	setRoute, 
	setTheme,
	setWorkspace,
	setCurrentProjectTitle, 
	setCurrentProjectPath 
} = actions

export default reducer


/*
	switch (action.type) {

		case appStateActions.SET_OBJECT_TO_DELETE:
			return Object.assign({}, state, {
				object_to_delete: action.object_to_delete
			});

		case appStateActions.SHOW_MOVE_TO_TRASH_ALERT:
			return Object.assign({}, state, {
				showMoveToTrashAlert: true,
			});

		case appStateActions.HIDE_MOVE_TO_TRASH_ALERT:
			return Object.assign({}, state, {
				showMoveToTrashAlert: false,
			});

        default:
            return state;
						
    }
		*/
