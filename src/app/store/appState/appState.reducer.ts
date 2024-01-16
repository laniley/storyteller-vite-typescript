import { createSlice } from '@reduxjs/toolkit'

//import * as appStateActions from "./appState.actions";

interface AppState {
	path: string,
	theme: string
};

export const initialState = {
	path: "",
	theme: "bp5-dark"
} as AppState

const appStateSlice = createSlice({
	name: 'appState',
	initialState,
	reducers: {
		setTheme(state, action) {
			state.theme = action.payload
		}
	}
})

// Extract the action creators object and the reducer
const { actions, reducer } = appStateSlice
// Extract and export each action creator by name
export const { setTheme } = actions

export default reducer


/*
	switch (action.type) {

		case appStateActions.SET_OBJECT_TO_DELETE:
			return Object.assign({}, state, {
				object_to_delete: action.object_to_delete
			});

        case appStateActions.SET_PATH:
            return Object.assign({}, state, {
                path: action.path
			});

		case appStateActions.SET_THEME:
			return Object.assign({}, state, {
				theme: action.theme
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
