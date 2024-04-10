import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as scenesActions from './scenes.actions'
import { getNewID } from '../../utils/utils'
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