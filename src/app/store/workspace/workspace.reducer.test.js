import reducer, { initialState, setProjects, setCurrentProjectTitle } from './workspace.reducer'
import * as actions from './workspace.actions.js'

describe('Workspace reducer', () => {

	it('should return the initial state for an unknown action', () => {
		expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState)
	})

	it('should handle setProjects', () => {
		expect(reducer(initialState, setProjects('projects'))).toEqual(
			Object.assign({}, initialState, {
				projects: "projects"
			})
		)
	})

	it('should handle setCurrentProjectTitle', () => {
		expect(reducer(initialState, setCurrentProjectTitle('project_title'))).toEqual(
			Object.assign({}, initialState, {
				current_project_title: "project_title"
			})
		)
	})

})
