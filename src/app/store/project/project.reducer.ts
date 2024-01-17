import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { storage } from '../../../api/storage'
import { initialState } from './project.model'

export const create = createAsyncThunk(
  'project/create',
  async (title_of_new_project:string, thunkAPI) => {
		storage.createProject(title_of_new_project)
		/*
    var path = result.filePaths[0];
					thunkAPI.dispatch(setPath(path))
					thunkAPI.dispatch(loadProjects());
					let state:any = thunkAPI.getState()
					storage.saveWorkspace(state.workspace.path)
					*/
  }
)

const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		setCover(state, action) {
			state.cover = action.payload
		},
		setTitle(state, action) {
			state.title = action.payload
		},
		setAuthor(state, action) {
			state.author = action.payload
		},
		setAbstract(state, action) {
			state.abstract = action.payload
		},
		setDedication(state, action) {
			state.dedication = action.payload
		},
		setRoute(state, action) {
			state.route = action.payload
		},
	}
})
// Extract the action creators object and the reducer
const { actions, reducer } = projectSlice
// Extract and export each action creator by name
export const { setCover, setTitle, setAuthor, setAbstract, setDedication, setRoute } = actions

export default reducer