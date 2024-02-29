import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getNewID } from '../reducers/utils'
import characterReducer from './reducer.character.index'

const initialState:Character[] = [];

const charactersSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {
		addCharacter(state, action) {
			state = state.slice();
			state.push(action.payload);
		},
		setCharacters(state, action) {
			state = action.payload
		},
	}
})
/*
const charactersReducer = (state:Character[] = [], action) => {
	// console.log("charactersReducer: " + action.type)
	switch (action.type) {

		case charactersActions.CREATE_CHARACTER:
			state = state.slice();
			state.push(Object.assign(initialState, action.character, { id: getNewID(state), position: state.length }));
			return state;

		case charactersActions.SET_DELETED_AT:
			state[state.indexOf(action.character)] = characterReducer(action.character, action);
			return state;

		default:
			return state;
	}
};
*/
// Extract the action creators object and the reducer
const { actions, reducer } = charactersSlice
// Extract and export each action creator by name
export const { 
	addCharacter, 
	setCharacters, 
} = actions

export default reducer
