import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getNewID } from '../../../utils/utils'
import { initialState as initialStateModel } from './scene.model'

export const initialState: Scene[] = []

const scenesSlice = createSlice({
	name: 'scenes',
	initialState,
	reducers: {
		setScenes(state, action) {
			state = action.payload
		},
		addScene(state, action) {
			state.push(action.payload)
		},
		createScene(state, action) {
			state.push(Object.assign({}, initialStateModel, action.payload.scene, { id: getNewID(state), position: state.length + 1 }))
		},
		setFrom(state, action) {
			state.forEach(scene => {
				if (scene.id == action.payload.id)
					scene.from = action.payload.from
			});
		},
		setTo(state, action) {
			state.forEach(scene => {
				if (scene.id == action.payload.id)
					scene.to = action.payload.to
			});
		},
		setLocationID(state, action) {
			state.forEach(scene => {
				if (scene.id == action.payload.id)
					scene.location_id = action.payload.location_id
			});
		},
		setTitle(state, action) {
			state.forEach(scene => {
				if (scene.id == action.payload.id)
					scene.title = action.payload.title
			});
		},
		setSubtitle(state, action) {
			state.forEach(scene => {
				if (scene.id == action.payload.id)
					scene.subtitle = action.payload.subtitle
			});
		},
		setSummary(state, action) {
			state.forEach(scene => {
				if (scene.id == action.payload.id)
					scene.summary = action.payload.summary
			});
		},
		setText(state, action) {
			state.forEach(scene => {
				if (scene.id == action.payload.id)
					scene.text = action.payload.text
			});
		},
		setDeletedAt(state, action) {
			state.forEach(scene => {
				if (scene.id == action.payload.id)
					scene.deleted_at = action.payload.deleted_at
			});
		},
	}
})
// Extract the action creators object and the reducer
const { actions, reducer } = scenesSlice
// Extract and export each action creator by name
export const { 
	setScenes,
	addScene,
	createScene,
	setFrom,
	setTo,
	setLocationID,
	setTitle,
	setSubtitle,
	setSummary,
	setText,
	setDeletedAt
} = actions

export default reducer
/*
const fs = require('fs');

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