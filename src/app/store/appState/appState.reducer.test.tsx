import reducer, {initialState, setRoute, setTheme, setWorkspace} from './appState.reducer'

describe('AppState reducer', () => {

	it('should return the initial state', () => {
		expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState)
	})

	it('should handle setRoute', () => {
		expect(reducer(initialState, setRoute('test_route'))).toEqual(
			Object.assign({}, initialState, {
				route: "test_route"
			})
		)
	})

	it('should handle setTheme', () => {
		expect(reducer(initialState, setTheme('test_theme'))).toEqual(
			Object.assign({}, initialState, {
				theme: "test_theme"
			})
		)
	})

	it('should handle setWorkspace', () => {
		expect(reducer(initialState, setWorkspace('test_workspace'))).toEqual(
			Object.assign({}, initialState, {
				workspace: "test_workspace"
			})
		)
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
