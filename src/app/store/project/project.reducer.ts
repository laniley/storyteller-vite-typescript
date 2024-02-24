import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { storage } from '../../../api/appStateAPI'
import { projectAPI } from '../../../api/projectAPI'
import { initialState } from './project.model'

export const path = require('path');

import * as appState from "./../appState/appState.reducer";
import * as workspace from "./../workspace/workspace.reducer";

import {
	TabId,
} from '@blueprintjs/core';

export const create = createAsyncThunk(
  'project/create',
  async (title_of_new_project:string, thunkAPI) => {
		console.log("Creating a new project...")
		let state:any = thunkAPI.getState()
		projectAPI.createProject(state.workspace, title_of_new_project)
  }
)

export const open = createAsyncThunk(
  'project/open',
	async(title:string, thunkAPI) => {
		let state:any = thunkAPI.getState()
		let fileData = projectAPI.getProjectData(state.appState.workspace, title)
		if (!fileData) {
			console.log("project.json file exists - but is empty");
		}
		else {
			thunkAPI.dispatch(appState.changeCurrentRootRoute('project'))
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
			let project_path = path.join(state.appState.workspace, fileData.title)
			console.log(project_path)
			thunkAPI.dispatch(appState.setCurrentProjectPath(project_path))
			storage.saveCurrentProjectTitle(title)
			storage.saveCurrentProjectPath(project_path)
			thunkAPI.dispatch(workspace.loadProjects());
		}
})

export const changeCurrentProjectRoute = createAsyncThunk(
  'project/changeCurrentRootRoute',
  async (navbarTabId:string, thunkAPI) => {
		console.log("Changing the current project route...")
		let state:any = thunkAPI.getState()
		var new_route = Object.assign({}, state.project.route, { current: navbarTabId });
		thunkAPI.dispatch(setRoute(new_route))
		state = thunkAPI.getState()
		projectAPI.save(state.appState.current_project_path, state.project);
  }
)

export const changeCurrentScriptRoute = createAsyncThunk(
	'project/changeCurrentScriptRoute',
  async (navbarTabId:TabId, thunkAPI) => {
		console.log("Changing the current script route...")
		let state:any = thunkAPI.getState()
		var new_script_route = Object.assign({}, state.project.route.script, { current: navbarTabId });
		var new_route = Object.assign({}, state.project.route, { script: new_script_route });
		thunkAPI.dispatch(setRoute(new_route))
		state = thunkAPI.getState()
		projectAPI.save(state.appState.current_project_path, state.project);
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