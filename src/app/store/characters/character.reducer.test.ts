import reducer, { initialState, setFirstName, setLastName, setNickname,setDeletedAt } from './character.reducer'

describe('Character reducer', () => {

	it('should return the initial state for an unknown action', () => {
		expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState)
	})

	it('should handle setFirstName', () => {
		expect(reducer(initialState, setFirstName('firstname'))).toEqual(Object.assign({}, initialState, { first_name: 'firstname' }))
	})

	it('should handle setLastName', () => {
		expect(reducer(initialState, setLastName('lastname'))).toEqual(Object.assign({}, initialState, { last_name: 'lastname' }))
	})

	it('should handle setNickname', () => {
		expect(reducer(initialState, setNickname('nickname'))).toEqual(Object.assign({}, initialState, { nickname: 'nickname' }))
	})

	it('should handle setDeletedAt', () => {
		expect(reducer(initialState, setDeletedAt('deleted_at'))).toEqual(Object.assign({}, initialState, { deleted_at: 'deleted_at' }))
	})

})
