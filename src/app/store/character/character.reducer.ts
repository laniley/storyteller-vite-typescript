import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const initialState = {
	first_name: '',
	last_name: '',
	nickname: '',
	deleted_at: null
} as Character

const characterSlice = createSlice({
	name: 'character',
	initialState,
	reducers: {
		setFirstName(state, action) {
			state.first_name = action.payload
		},
		setLastName(state, action) {
			state.last_name = action.payload
		},
		setNickname(state, action) {
			state.nickname = action.payload
		},
		setDeletedAt(state, action) {
			state.deleted_at = action.payload
		},
	}
})

// Extract the action creators object and the reducer
const { actions, reducer } = characterSlice
// Extract and export each action creator by name
export const {
	setFirstName,
	setLastName,
	setNickname,
	setDeletedAt,
} = actions

export default reducer;
