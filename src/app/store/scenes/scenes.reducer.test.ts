import reducer, * as scenesReducer from './scenes.reducer'
import { initialState as initialStateScene } from './scene.model'

describe('Scenes reducer', () => {

  it('should return the initial state for an unknown action', () => {
		expect(reducer(undefined, { type: 'unknown' })).toEqual(scenesReducer.initialState)
	})

	it('should handle setScenes', () => {
		expect(reducer(scenesReducer.initialState, scenesReducer.setScenes([]))).toEqual([])
	})

	it('should handle addScene', () => {
		expect(reducer(scenesReducer.initialState, scenesReducer.addScene(initialStateScene))).toEqual(
			Object.assign([], scenesReducer.initialState, [initialStateScene])
		)
	})

	it('should handle createScene', () => {
		expect(reducer(scenesReducer.initialState, scenesReducer.createScene(initialStateScene))).toEqual(
			[Object.assign({}, initialStateScene, { id: 1 })]
		)
	})

	it('should handle setFrom', () => {
		const date = Date()
		const scene:Scene = Object.assign({}, initialStateScene, { id: 1 })
		const new_state = reducer(scenesReducer.initialState, scenesReducer.addScene(scene))
		expect(reducer(new_state, scenesReducer.setFrom({id: 1, from: date}))).toEqual(
			[Object.assign({}, initialStateScene, { id: 1, from: date })]
		)
	})

	it('should handle setTo', () => {
		const date = Date()
		const scene:Scene = Object.assign({}, initialStateScene, { id: 1 })
		const new_state = reducer(scenesReducer.initialState, scenesReducer.addScene(scene))
		expect(reducer(new_state, scenesReducer.setTo({id: 1, to: date}))).toEqual(
			[Object.assign({}, initialStateScene, { id: 1, to: date })]
		)
	})

	it('should handle setLocationID', () => {
		const scene:Scene = Object.assign({}, initialStateScene, { id: 1 })
		const new_state = reducer(scenesReducer.initialState, scenesReducer.addScene(scene))
		expect(reducer(new_state, scenesReducer.setLocationID({id: 1, location_id: 1}))).toEqual(
			[Object.assign({}, initialStateScene, { id: 1, location_id: 1 })]
		)
	})

	it('should handle setTitle', () => {
		const scene:Scene = Object.assign({}, initialStateScene, { id: 1 })
		const new_state = reducer(scenesReducer.initialState, scenesReducer.addScene(scene))
		expect(reducer(new_state, scenesReducer.setTitle({id: 1, title: 'title'}))).toEqual(
			[Object.assign({}, initialStateScene, { id: 1, title: 'title' })]
		)
	})

	it('should handle setSubtitle', () => {
		const scene:Scene = Object.assign({}, initialStateScene, { id: 1 })
		const new_state = reducer(scenesReducer.initialState, scenesReducer.addScene(scene))
		expect(reducer(new_state, scenesReducer.setSubtitle({id: 1, subtitle: 'subtitle'}))).toEqual(
			[Object.assign({}, initialStateScene, { id: 1, subtitle: 'subtitle' })]
		)
	})

	it('should handle setSummary', () => {
		const scene:Scene = Object.assign({}, initialStateScene, { id: 1 })
		const new_state = reducer(scenesReducer.initialState, scenesReducer.addScene(scene))
		expect(reducer(new_state, scenesReducer.setSummary({id: 1, summary: 'summary'}))).toEqual(
			[Object.assign({}, initialStateScene, { id: 1, summary: 'summary' })]
		)
	})

	it('should handle setText', () => {
		const scene:Scene = Object.assign({}, initialStateScene, { id: 1 })
		const new_state = reducer(scenesReducer.initialState, scenesReducer.addScene(scene))
		expect(reducer(new_state, scenesReducer.setText({id: 1, text: 'text'}))).toEqual(
			[Object.assign({}, initialStateScene, { id: 1, text: 'text' })]
		)
	})

	it('should handle setDeletedAt', () => {
		const date = Date()
		const scene:Scene = Object.assign({}, initialStateScene, { id: 1 })
		const new_state = reducer(scenesReducer.initialState, scenesReducer.addScene(scene))
		expect(reducer(new_state, scenesReducer.setDeletedAt({id: 1, deleted_at: date}))).toEqual(
			[Object.assign({}, initialStateScene, { id: 1, deleted_at: date })]
		)
	})
})
/*
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

import * as actions from './scenes.actions';

jest.mock('fs');
jest.mock('electron-json-storage-sync');

describe('Scenes actions', () => {

	it('should dispatch ADD_SCENE action', () => {

		expect(actions.addScene('scene')).toEqual({
			scene: 'scene',
			type: 'ADD_SCENE'
		});
	})

	it('should dispatch CREATE_SCENE action', () => {

		expect(actions.createScene('scene')).toEqual({
			scene: 'scene',
			type: 'CREATE_SCENE'
		});
	})

	describe('deleteScene', () => {

		it('should dispatch SET_DELETED_AT action', () => {

			const mockState = {}

			const store = mockStore({
			})

			store.getState = () => mockState

			store.dispatch(actions.deleteScene("scene"))

			const executed_actions = store.getActions();

			expect(executed_actions[0].type).toEqual("SET_DELETED_AT")
			expect(executed_actions[0].scene).toEqual("scene")
			expect(executed_actions[0].deleted_at.toString().length).toBeGreaterThan(0);
		})
	})

/* 	describe('save', () => {

		it('should dispatch save action', () => {

			const mockState = {}

			const store = mockStore({
				scenes: 'test'
			})

			store.getState = () => mockState

			require('electron-json-storage-sync').set('storyteller', { "status": true, "data": { "path": "" } });

			store.dispatch(actions.save())

			const executed_actions = store.getActions();

			expect(executed_actions).toEqual({})
		})
	}) */
//})