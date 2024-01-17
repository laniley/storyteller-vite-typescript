import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { storage } from '../../../api/storage'
import { initialState } from './project.model'

import * as appState from "./../appState/appState.reducer";
import * as workspace from "./../workspace/workspace.reducer";

export const create = createAsyncThunk(
  'project/create',
  async (title_of_new_project:string, thunkAPI) => {
		storage.createProject(title_of_new_project)
  }
)

export const open = createAsyncThunk(
  'project/open',
	async(title:string, thunkAPI) => {
		let fileData = storage.getProjectData(title)
		if (!fileData) {
			console.log("project.json file exists - but is empty");
		}
		else {
			thunkAPI.dispatch(setRoute(fileData.route || initialState.route));
			thunkAPI.dispatch(setCover(fileData.cover));
			thunkAPI.dispatch(setTitle(fileData.title));
			thunkAPI.dispatch(setAuthor(fileData.author));
			thunkAPI.dispatch(setAbstract(fileData.abstract));
			thunkAPI.dispatch(setDedication(fileData.dedication));
			thunkAPI.dispatch(setStyles(fileData.styles));
			//thunkAPI.dispatch(setSelectedChapter(fileData.selectedChapter || initialProjectState.selectedChapter));
			//thunkAPI.dispatch(charactersActions.load(directoryPath))
			//thunkAPI.dispatch(partsActions.load(directoryPath))
			//thunkAPI.dispatch(chaptersActions.load(directoryPath))
			//thunkAPI.dispatch(scenesActions.load(directoryPath))
			thunkAPI.dispatch(appState.setCurrentProject(fileData.title))
			storage.saveCurrentProject(title)
			thunkAPI.dispatch(workspace.loadProjects());
		}
})

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
		setStyles(state, action) {
			state.styles = action.payload
		},
	}
})
// Extract the action creators object and the reducer
const { actions, reducer } = projectSlice
// Extract and export each action creator by name
export const { 
	setCover, 
	setTitle, 
	setAuthor, 
	setAbstract, 
	setDedication, 
	setRoute,
	setStyles
} = actions

export default reducer