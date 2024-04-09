import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const initialState = {
	id: "chapter-1",
	title: "",
	part: 1,
	position: 1
} as Chapter

const appStateSlice = createSlice({
	name: 'chapter',
	initialState,
	reducers: {
		setTitle(state, action) {
			state.title = action.payload
		},
		setDeletedAt(state, action) {
			state.deleted_at = action.payload
		},
	}
})

// Extract the action creators object and the reducer
const { actions, reducer } = appStateSlice
// Extract and export each action creator by name
export const {
	setTitle, 
	setDeletedAt,
} = actions

export default reducer;
