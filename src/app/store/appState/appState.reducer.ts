import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { storage } from '../../../api/appStateAPI'
import * as workspaceReducer from '../workspace/workspace.reducer'
import { TabId } from '@blueprintjs/core'

const { dialog } = require('@electron/remote');

export type AppState = {
  route: string,
  theme: string,
  workspace: string
}

export const initialState = {
	route: "workspace",
	theme: "bp5-dark",
	workspace: ""
} as AppState

export const changeCurrentRootRoute = createAsyncThunk(
  'appState/changeCurrentRootRoute',
  async (navbarTabId:TabId, thunkAPI) => {
		console.log("Changing the current root route...")
		let state:any = thunkAPI.getState()
		thunkAPI.dispatch(setRoute(navbarTabId))
		state = thunkAPI.getState()
		storage.save(state.appState);
  }
)

export const changeWorkspace = createAsyncThunk(
  'appState/changeWorkspace',
  async (arg, thunkAPI) => {
    dialog.showOpenDialog({ properties: ['openDirectory'] })
			.then((result: { canceled: any; filePaths: any[]; }) => {
				console.log("result: " + JSON.stringify(result));
				if (!result.canceled) {
					var path = result.filePaths[0];
					thunkAPI.dispatch(setWorkspace(path))
					thunkAPI.dispatch(workspaceReducer.open());
					let state:any = thunkAPI.getState()
					storage.saveWorkspace(state.appState.workspace)
			}
		});
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
