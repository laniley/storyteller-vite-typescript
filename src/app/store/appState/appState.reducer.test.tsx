import { act, screen, waitFor } from '@testing-library/react'
import reducer, * as appStateReducer from './appState.reducer'
import { setupStore } from './../../store';

describe('AppState reducer', () => {

	it('should return the initial state', () => {
		expect(reducer(undefined, { type: 'unknown' })).toEqual(appStateReducer.initialState)
	})

	it('should handle setRoute', () => {
		expect(reducer(appStateReducer.initialState, appStateReducer.setRoute('test_route'))).toEqual(
			Object.assign({}, appStateReducer.initialState, {
				route: "test_route"
			})
		)
	})

	it('should handle setTheme', () => {
		expect(reducer(appStateReducer.initialState, appStateReducer.setTheme('test_theme'))).toEqual(
			Object.assign({}, appStateReducer.initialState, {
				theme: "test_theme"
			})
		)
	})

	it('should handle setWorkspace', () => {
		expect(reducer(appStateReducer.initialState, appStateReducer.setWorkspace('test_workspace'))).toEqual(
			Object.assign({}, appStateReducer.initialState, {
				workspace: "test_workspace"
			})
		)
	})

	describe('AppState Thunks', () => {

		it('should handle changeCurrentRootRoute', async() => {
			const store = setupStore();
			let result = null
			result = await store.dispatch(appStateReducer.changeCurrentRootRoute('welcome'))
			expect(result.payload).toEqual(
				Object.assign({}, appStateReducer.initialState, {route: "welcome"})
			)
			result = await store.dispatch(appStateReducer.changeCurrentRootRoute('workspace'))
			expect(result.payload).toEqual(
				Object.assign({}, appStateReducer.initialState, {route: "workspace"})
			)
		})

	})

	/*
	it('should handle SET_OBJECT_TO_DELETE', () => {
		expect(
			reducer(initialState, {
				type: actions.SET_OBJECT_TO_DELETE,
				object_to_delete: 'test'
			})
		).toEqual(
			Object.assign({}, initialState, {
				object_to_delete: "test"
			})
		)
	})
*/

/*
	it('should handle SHOW_MOVE_TO_TRASH_ALERT', () => {
		expect(
			reducer(initialState, {
				type: actions.SHOW_MOVE_TO_TRASH_ALERT
			})
		).toEqual(
			Object.assign({}, initialState, {
				showMoveToTrashAlert: true
			})
		)
	})
*/

/*
	it('should handle HIDE_MOVE_TO_TRASH_ALERT', () => {
		expect(
			reducer(initialState, {
				type: actions.HIDE_MOVE_TO_TRASH_ALERT
			})
		).toEqual(
			Object.assign({}, initialState, {
				showMoveToTrashAlert: false
			})
		)
	})
*/
})
