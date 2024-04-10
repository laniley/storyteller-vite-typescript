import * as selectors from './project.selectors'
import { initialState } from './project.model'

describe('Project selectors', () => {

	describe('getRoute()', () => {

		it('should return "" if no current route is set', () => {
			const test_project = Object.assign(initialState, {route: {}})
			expect(selectors.getRoute(test_project)).toEqual("")
		})
/*
		it('should return the current route if it is set', () => {

			const state = {
				route: {
					current: "test",
					test: {
						current: "index"
					}
				}
			}

			expect(selectors.getRoute(state)).toEqual("/test/index")
		})
*/
	})
})
