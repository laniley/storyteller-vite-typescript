import reducer from './parts.reducer'
//import { partsActions as actions } from '../actions'
import { initialState as initialStatePart } from './partModel'

const initialState:Part[] = [];

describe('Parts reducer', () => {

	it('should return the initial state for an unknown action', () => {
		expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState)
	})
/*
	it('should handle ADD_PART', () => {
		expect(
			reducer(initialState, {
				type: actions.ADD_PART,
				part: initialStatePart
			})
		).toEqual(
			Object.assign([], initialState, [
				initialStatePart
			])
		)
	})
*/
/*
	it('should handle SET_DELETED_AT', () => {

		const part = initialStatePart;

		const state = reducer(initialState, {
			type: actions.ADD_PART,
			part: part
		})

		const expected_result = Object.assign({}, part, { deleted_at: '01-01-1900 00:00:00' })

		expect(
			reducer(state, {
				type: actions.SET_DELETED_AT,
				part: state[0],
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
