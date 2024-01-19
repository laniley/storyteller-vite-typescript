import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { storage } from '../../../api/appStateAPI'
import { projectAPI } from '../../../api/projectAPI'
import { initialState } from './project.model'

export const path = require('path');

import * as appState from "./../appState/appState.reducer";
import * as workspace from "./../workspace/workspace.reducer";

export const create = createAsyncThunk(
  'project/create',
  async (title_of_new_project:string, thunkAPI) => {
		let state:any = thunkAPI.getState()
		projectAPI.createProject(state.workspace, title_of_new_project)
  }
)

export const open = createAsyncThunk(
  'project/open',
	async(data: {workspace:string, title:string }, thunkAPI) => {
		let fileData = projectAPI.getProjectData(data.workspace, data.title)
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
			thunkAPI.dispatch(appState.setCurrentProjectTitle(fileData.title))
			let state:any = thunkAPI.getState()
			let project_path = path.join(state.workspace.path, fileData.title)
			thunkAPI.dispatch(appState.setCurrentProjectPath(project_path))
			storage.saveCurrentProjectTitle(data.title)
			storage.saveCurrentProjectPath(project_path)
			thunkAPI.dispatch(workspace.loadProjects());
		}
})

export const changeCurrentRootRoute = createAsyncThunk(
  'project/changeCurrentRootRoute',
  async (navbarTabId:string, thunkAPI) => {
		console.log("Changing the current root route...")
		let state:any = thunkAPI.getState()
		var new_route = Object.assign({}, state.project.route, { current: navbarTabId });
		//thunkAPI.dispatch(setRoute(new_route))
		projectAPI.save(state.app.current_project_path, state.project);
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