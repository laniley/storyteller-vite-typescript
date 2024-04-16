import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const { dialog } = require('@electron/remote');
import { workspaceAPI } from '../../../api/workspaceAPI'

import * as projectReducer from "../../store/project/project.reducer";

export const initialState = {
	current_project_title: '',
	projects: [],
} as Workspace

export const open = createAsyncThunk(
	'workspace/open',
	async(arg, thunkAPI) => {
		let state:State = thunkAPI.getState()
		let result = workspaceAPI.get(state.appState.workspace)
		console.log("workspace loaded: ", result)
		thunkAPI.dispatch(setCurrentProjectTitle(result.current_project_title));
		let projectListItems:Array<ProjectListItem> = workspaceAPI.getProjects(state.appState, state.workspace);
		projectListItems.forEach(project => {
			if(project.title === result.current_project_title) {
				project.isCurrentlyOpen = true
			}
		});
		thunkAPI.dispatch(setProjects(projectListItems));
		if(state.appState.route == 'project') {
			thunkAPI.dispatch(projectReducer.open(result.current_project_title));
		}
		else {
			thunkAPI.dispatch(projectReducer.load(result.current_project_title));
		}
	}
);

export const loadProjects = createAsyncThunk(
	'workspace/loadProjects',
	async(arg, thunkAPI) => {
		let state:State = thunkAPI.getState()
		let projects:Array<Project> = workspaceAPI.getProjects(state.appState, state.workspace);
		projects.forEach(project => {
			if(project.title === state.workspace.current_project_title) {
				project.isCurrentlyOpen = true
			}
		});
		thunkAPI.dispatch(setProjects(projects));
	}
);

export const changeCurrentProject = createAsyncThunk(
  'workspace/changeCurrentProject',
  async (data:{ title:string, path:string }, thunkAPI) => {
    thunkAPI.dispatch(setCurrentProjectTitle(data.title))
		workspaceAPI.saveCurrentProjectTitle(data.path, data.title)
  }
)

const workspaceSlice = createSlice({
	name: 'workspace',
	initialState,
	reducers: {
		setProjects(state, action) {
			state.projects = action.payload
		},
		setCurrentProjectTitle(state, action) {
			state.current_project_title = action.payload
		},
		
	}
})
// Extract the action creators object and the reducer
const { actions, reducer } = workspaceSlice
// Extract and export each action creator by name
export const { 
	setProjects,
	setCurrentProjectTitle,
} = actions

export default reducer
