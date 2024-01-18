import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { storage } from '../../../api/storage'

interface AppState {
	theme: string,
	current_project_title: string,
	current_project_path: string
};

export const initialState = {
	theme: "bp5-dark",
	current_project_title: "",
	current_project_path: ""
} as AppState

export const changeWorkspace = createAsyncThunk(
  'workspace/changeCurrentProject',
  async (data:{ title:string, path:string }, thunkAPI) => {
    thunkAPI.dispatch(setCurrentProjectTitle(data.title))
		thunkAPI.dispatch(setCurrentProjectPath(data.path))
		storage.saveCurrentProjectTitle(data.title)
		storage.saveCurrentProjectPath(data.path)
  }
)

const appStateSlice = createSlice({
	name: 'appState',
	initialState,
	reducers: {
		setTheme(state, action) {
			state.theme = action.payload
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
export const { setTheme, setCurrentProjectTitle, setCurrentProjectPath } = actions

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
