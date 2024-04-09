import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getNewID } from '../utils'
import characterReducer from './character.reducer'

export const initialState:Character[] = [];

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

/*
const fs = require('fs');

// ############ ACTION TYPES ##############
export const ADD_CHARACTER = 'ADD_CHARACTER';
export const CREATE_CHARACTER = 'CREATE_CHARACTER';
export const SET_CHARACTERS = 'SET_CHARACTERS';

export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_NICKNAME = 'SET_NICKNAME';
export const SET_DELETED_AT = 'SET_DELETED_AT';

// ############## ACTIONS #################
export const addCharacter = (character) => ({ type: ADD_CHARACTER, character });
export const createCharacter = (character) => ({ type: CREATE_CHARACTER, character });
export const setCharacters = (characters) => ({ type: SET_CHARACTERS, characters });

export const setFirstName = (first_name) => ({ type: SET_FIRST_NAME, first_name });
export const setLastName = (last_name) => ({ type: SET_LAST_NAME, last_name });
export const setNickname = (nickname) => ({ type: SET_NICKNAME, nickname });
export const setDeletedAt = (deleted_at) => ({ type: SET_DELETED_AT, deleted_at });

export const save = () => {

	console.log("saving characters...")

	return (dispatch, getState) => {

		let content = JSON.stringify(getState().charactersReducer);
		console.log("content: " + content);

		storage.get('storyteller', function (error, data) {
			if (error) throw error;
			console.log("current_project: " + data.path);
			if (data.path) {
				fs.writeFile(data.path + "/src/characters.json", content, (err) => {
					if (err) {
						console.log("FAILURE: ", err)
					}
					else {
						console.log("Saved!")
					}
				})
			}
		});
	};
};

export const load = (directoryPath) => {

	console.log("load characters from file: " + directoryPath);

	return (dispatch, getState) => {

		dispatch(setCharacters([]));

		storage.get('storyteller', function (error, data) {
			if (error) throw error;

			if (data) {

				var new_data = Object.assign({}, data, {
					path: directoryPath
				});

				storage.set('storyteller', new_data, (error) => {
					if (error) throw error;
				});
			}
		});

		if (!storytellerCharactersFileExists(directoryPath + "/src")) {
			// TO DO: Show UI dialog that directory is not empty, ask user if it should be used for a new project
			console.log("characters.json file does not exist");
		}
		else {
			console.log("characters.json file exists");

			return fs.readFile(directoryPath + '/src/characters.json', (err, fileData) => {

				if (err) throw err;

				var data = fileData;

				if (!fileData) {

					console.log("characters.json file exists - but is empty");
				}
				else {
					JSON.parse(data).forEach(character => {
						dispatch(addCharacter(character));
					})
				}

			});
		}
	};
}

function storytellerCharactersFileExists(directoryPath) {

	let fileNameExists = false;

	fs.readdirSync(directoryPath).forEach(fileName => {
		if (fileName == "characters.json") fileNameExists = true;
		// console.log(fileName, fileNameExists)
	});

	return fileNameExists;
};*/