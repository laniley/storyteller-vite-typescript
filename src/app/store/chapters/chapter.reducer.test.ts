import reducer, { initialState, setTitle, setDeletedAt } from './chapter.reducer'

describe('Chapter reducer', () => {

	it('should return the initial state for an unknown action', () => {
		expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState)
	})

	it('should set the title', () => {
		expect(reducer(initialState, setTitle('test_title'))).toEqual(Object.assign({}, initialState, { title: 'test_title' }))
	})

	it('should set deleted_at', () => {
		expect(reducer(initialState, setDeletedAt('test_deleted_at'))).toEqual(Object.assign({}, initialState, { deleted_at: 'test_deleted_at' }))
	})

})
