import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { workspaceAPI } from '../../../api/workspaceAPI'
import { projectAPI } from '../../../api/projectAPI'
import { initialState } from './project.initialState'

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
		let state:State = thunkAPI.getState()
		let fileData = projectAPI.getProjectData(state.appState.workspace, title)
		console.log('project loaded: ' + fileData)
		if (!fileData) {
			console.log("project.json file exists - but is empty");
		}
		else {
			thunkAPI.dispatch(appState.changeCurrentRootRoute('project'))
			thunkAPI.dispatch(setRoute(fileData.route || initialState.route));
			thunkAPI.dispatch(setCover(fileData.cover));
			thunkAPI.dispatch(setTitle(title));
			thunkAPI.dispatch(setAuthor(fileData.author));
			thunkAPI.dispatch(setAbstract(fileData.abstract));
			thunkAPI.dispatch(setDedication(fileData.dedication));
			thunkAPI.dispatch(setStyles(fileData.styles));
			//thunkAPI.dispatch(setSelectedChapter(fileData.selectedChapter || initialProjectState.selectedChapter));
			//thunkAPI.dispatch(charactersActions.load(directoryPath))
			//thunkAPI.dispatch(partsActions.load(directoryPath))
			//thunkAPI.dispatch(chaptersActions.load(directoryPath))
			//thunkAPI.dispatch(scenesActions.load(directoryPath))
			thunkAPI.dispatch(workspace.setCurrentProjectTitle(title))
			workspaceAPI.saveCurrentProjectTitle(state.appState.workspace, title)
			thunkAPI.dispatch(workspace.loadProjects());
		}
})

export const save = createAsyncThunk(
	'project/save',
	async(thunkAPI) => {
		console.log('TODO: Implement project/save')
})

export const changeCurrentProjectRoute = createAsyncThunk(
  'project/changeCurrentRootRoute',
  async (navbarTabId:string, thunkAPI) => {
		console.log("Changing the current project route...")
		let state:any = thunkAPI.getState()
		var new_route = Object.assign({}, state.project.route, { current: navbarTabId });
		thunkAPI.dispatch(setRoute(new_route))
		state = thunkAPI.getState()
		let projectPath = path.join(state.appState.workspace, state.workspace.current_project_title)
		projectAPI.save(projectPath, state.project);
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
		let projectPath = path.join(state.appState.workspace, state.workspace.current_project_title)
		projectAPI.save(projectPath, state.project);
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


/*
import { exportAsEpub } from './project.actions.export.epub.index';
export { exportAsEpub };

const fs = require('fs-extra');

const path = require('path');

// ############ ACTION TYPES ##############
export const SET_SELECTED_CHAPTER = 'SET_SELECTED_CHAPTER';

// ############## ACTIONS #################
export const setSelectedChapter = (chapter) => ({ type: SET_SELECTED_CHAPTER, chapter });

export const closeProjectAction = () => {

	console.log("closeProjectAction");

	return (dispatch, getState) => {

		storage.get('storyteller', function (error, data) {
			if (error) throw error;

			if (data) {

				var new_data = Object.assign({}, data, {
					path: ''
				});

				storage.set('storyteller', new_data, (error) => {
					if (error) throw error;
					dispatch(appStateActions.setPath(""));
				});
			}
		});
	}
}

export const archive = () => {

	return (dispatch, getState) => {

		var date = new Date();
		var date_splitted = date.toISOString().split('T');
		var date_string = date_splitted[0].replace(/-/g, "") + "_" + date_splitted[1].substring(0, 8).replace(/:/g, "");

		var path = getState().appStateReducer.path;

		fs.copy(path + "/src", path + "/archive/" + date_string, (err) => {
			if (err) {
				return console.error(err);
			}
			console.log('done!');
		});
	};
}

export const deleteProject = (directoryPath) => {

	return (dispatch, getState) => {

		console.log("deleting project...", directoryPath);

		var rimraf = require("rimraf");
		rimraf(directoryPath, function () {
			console.log("done");
			dispatch(workspaceActions.loadProjects());
		});
	};
}*/