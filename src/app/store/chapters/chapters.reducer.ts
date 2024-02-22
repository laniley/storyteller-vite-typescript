import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import chapterReducer from './chapter.reducer'

export const initialState = {
	chapters: []
} as Chapters

const chaptersSlice = createSlice({
	name: 'chapters',
	initialState,
	reducers: {
		set(state, action) {
			state.chapters = action.payload
			/*
			state = state.slice();
			state.push(action.chapter);
			return state;
			*/
		},
	}
})

// Extract the action creators object and the reducer
const { actions, reducer } = chaptersSlice
// Extract and export each action creator by name
export const { set } = actions

export default reducer
/*
const chapters = (state = [], action) => {

	switch (action.type) {

		case chapterActions.ADD:
			state = state.slice();
			state.push(action.chapter);
			return state;

		case chapterActions.SET_CHAPTERS:
			state = action.chapters;
			return state;

		case chapterActions.SET_TITLE:
			state[state.indexOf(action.chapter)] = chapterReducer(action.chapter, action);
			return state;

		case chapterActions.SET_DELETED_AT:
			state[state.indexOf(action.chapter)] = chapterReducer(action.chapter, action);
			return state;

		default:
			return state;
	}
};
*/