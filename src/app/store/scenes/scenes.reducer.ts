import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getNewID } from '../../../utils/utils'
import sceneReducer from './sceneReducer/scene.reducer'

export const initialState = {
	scenes: []
} as Scenes

const scenesSlice = createSlice({
	name: 'scenes',
	initialState,
	reducers: {
		setScenes(state, action) {
			state.scenes = action.payload
		},
		/*
		addScene(state, action) {
			state.scenes.push(action.payload)
		},*/
		/*
		createScene(state, action) {
			state.push(Object.assign(initialState, action.payload.scene, { id: getNewID(state), position: state.length }))
		},*/
		/*
		setDeletedAt(state, action) {
			state[state.indexOf(action.payload.scene)] = sceneReducer(action.payload.scene, action)
		},*/
	}
})
// Extract the action creators object and the reducer
const { actions, reducer } = scenesSlice
// Extract and export each action creator by name
export const { 
	setScenes,
	//addScene,
	//createScene
} = actions

export default reducer
/*
const fs = require('fs');

// ############ ACTION TYPES ##############
export const SET_FROM = 'SET_FROM';
export const SET_TO = 'SET_TO';
export const SET_LOCATION_ID = 'SET_LOCATION_ID';
export const SET_TITLE = 'SET_TITLE';
export const SET_SUBTITLE = 'SET_SUBTITLE';
export const SET_SUMMARY = 'SET_SUMMARY';
export const SET_TEXT = 'SET_TEXT';
export const SET_DELETED_AT = 'SET_DELETED_AT';

// ############## ACTIONS #################
export const addScene = (scene) => ({ type: ADD_SCENE, scene });
export const createScene = (scene) => ({ type: CREATE_SCENE, scene });

export const setFrom = (from) => ({ type: SET_FROM, from });
export const setTo = (to) => ({ type: SET_TO, to });
export const setLocationId = (locationID) => ({ type: SET_LOCATION_ID, locationID });
export const setTitle = (title) => ({ type: SET_TITLE, title });
export const setSubtitle = (subtitle) => ({ type: SET_SUBTITLE, subtitle });
export const setSummary = (summary) => ({ type: SET_SUMMARY, summary });
export const setText = (text) => ({ type: SET_TEXT, text });
export const setDeletedAt = (scene, deleted_at) => ({ type: SET_DELETED_AT, scene, deleted_at });

export const deleteScene = (scene) => {

	return (dispatch, getState) => {

		dispatch(setDeletedAt(scene, new Date()));
	}
};

export const save = () => {

	console.log("saving scene...")

	return (dispatch, getState) => {

		let content = JSON.stringify(getState().scenes);

		var result = sync_storage.get('storyteller');

		console.log("result: " + JSON.stringify(result));

		if (result.data.path) {

			fs.writeFile(data.path + "/src/scenes.json", content, (err) => {
				if (err) {
					console.log("FAILURE: ", err)
				}
				else {
					console.log("Saved!")
				}
			})
		}
	};
};

export const load = (directoryPath) => {

	console.log("load scenes from file: " + directoryPath);

	return (dispatch, getState) => {

		if (!storytellerScenesFileExists(directoryPath + "/src")) {
			// TO DO: Show UI dialog that directory is not empty, ask user if it should be used for a new project
			console.log("scenes.json file does not exist");
		}
		else {
			console.log("scenes.json file exists");

			return fs.readFile(directoryPath + '/src/scenes.json', (err, fileData) => {

				if (err) throw err;

				var data = fileData;

				if (!fileData) {

					console.log("scenes.json file exists - but is empty");
				}
				else {
					JSON.parse(data).forEach(scene => {
						dispatch(addScene(scene));
					})
				}

			});
		}
	};
}

function storytellerScenesFileExists(directoryPath) {

	let fileNameExists = false;

	fs.readdirSync(directoryPath).forEach(fileName => {
		if (fileName == "scenes.json") fileNameExists = true;
		// console.log(fileName, fileNameExists)
	});

	return fileNameExists;
};*/