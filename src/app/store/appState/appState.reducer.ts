import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { storage } from '../../../api/storage'

interface AppState {
	theme: string,
	current_project: string
};

export const initialState = {
	theme: "bp5-dark",
	current_project: ""
} as AppState

export const changeWorkspace = createAsyncThunk(
  'workspace/changeCurrentProject',
  async (title:string, thunkAPI) => {
    thunkAPI.dispatch(setCurrentProject(title))
		storage.saveCurrentProject(title)
  }
)

const appStateSlice = createSlice({
	name: 'appState',
	initialState,
	reducers: {
		setTheme(state, action) {
			state.theme = action.payload
		},
		setCurrentProject(state, action) {
			state.current_project = action.payload
		}
	}
})

// Extract the action creators object and the reducer
const { actions, reducer } = appStateSlice
// Extract and export each action creator by name
export const { setTheme, setCurrentProject } = actions

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
