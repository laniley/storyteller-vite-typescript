import reducer from './scenes.reducer'
import { initialState as initialStateScene } from './scene.model'

const initialState:Scenes = { scenes: [] };

describe('Scenes reducer', () => {

  it('should return the initial state for an unknown action', () => {
		expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState)
	})
/*
	it('should handle ADD_SCENE', () => {
		expect(
			reducer(initialState, {
				type: actions.ADD_SCENE,
				scene: initialStateScene
			})
		).toEqual(
			Object.assign([], initialState, [
				initialStateScene
			])
		)
	})
*/
/*
	it('should handle CREATE_SCENE', () => {
		expect(
			reducer(initialState, {
				type: actions.CREATE_SCENE,
				scene: initialStateScene
			})
		).toEqual(
			Object.assign([], initialState, [
				initialStateScene
			])
		)
	})
*/
/*
	it('should handle SET_DELETED_AT', () => {

		const scene = initialStateScene;

		const state = reducer(initialState, {
			type: actions.ADD_SCENE,
			scene: scene
		})

		const expected_result = Object.assign({}, scene, { deleted_at: '01-01-1900 00:00:00' })

		expect(
			reducer(state, {
				type: actions.SET_DELETED_AT,
				scene: state[0],
				deleted_at: '01-01-1900 00:00:00'
			})
		).toEqual(
			Object.assign([], initialState, [
				expected_result
			])
		)
	})
	*/
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