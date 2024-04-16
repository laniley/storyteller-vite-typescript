import reducer, { setCover, setTitle, setAuthor, setAbstract, setDedication, setRoute, setStyles } from './project.reducer'
import { initialState } from './project.initialState'

describe('Project reducer', () => {

  it('should return the initial state for an unknown action', () => {
        expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState)
	})

	it('should handle setCover', () => {
		expect(reducer(initialState, setCover('test_cover'))).toEqual(Object.assign({}, initialState, { cover: 'test_cover' }))
	})

	it('should handle setTitle', () => {
		expect(reducer(initialState, setTitle('test_title'))).toEqual(Object.assign({}, initialState, { title: 'test_title' }))
	})

	it('should handle setAuthor', () => {
		expect(reducer(initialState, setAuthor('firstname lastname'))).toEqual(Object.assign({}, initialState, { author: 'firstname lastname' }))
	})

	it('should handle setAbstract', () => {
		expect(reducer(initialState, setAbstract('test'))).toEqual(Object.assign({}, initialState, { abstract: 'test' }))
	})

	it('should handle setDedication', () => {
		expect(reducer(initialState, setDedication('test'))).toEqual(Object.assign({}, initialState, { dedication: 'test' }))
	})

	it('should handle setRoute', () => {
		expect(reducer(initialState, setRoute('test_route'))).toEqual(Object.assign({}, initialState, { route: 'test_route' }))
	})

	it('should handle setStyles', () => {
		expect(reducer(initialState, setStyles('test'))).toEqual(Object.assign({}, initialState, { styles: 'test' }))
	})
})


/*
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

import * as actions from './project.actions';

jest.mock('fs');

describe('Project actions', () => {

	it('should dispatch SET_COVER action', () => {
		expect(actions.setCover("cover")).toEqual({
			cover: 'cover',
			type: 'SET_COVER'
		});
	})

	it('should dispatch SET_TITLE action', () => {
		expect(actions.setTitle("title")).toEqual({
			title: 'title',
			type: 'SET_TITLE'
		});
	})

	it('should dispatch SET_AUTHOR action', () => {
		expect(actions.setAuthor("author")).toEqual({
			author: 'author',
			type: 'SET_AUTHOR'
		});
	})

	it('should dispatch SET_ABSTRACT action', () => {
		expect(actions.setAbstract("test")).toEqual({
			abstract: 'test',
			type: 'SET_ABSTRACT'
		});
	})

	it('should dispatch SET_DEDICATION action', () => {
		expect(actions.setDedication("dedication")).toEqual({
			dedication: 'dedication',
			type: 'SET_DEDICATION'
		});
	})

	it('should dispatch SET_SELECTED_CHAPTER action', () => {
		expect(actions.setSelectedChapter("test")).toEqual({
			chapter: 'test',
			type: 'SET_SELECTED_CHAPTER'
		});
	})

	it('should dispatch SET_STYLES action', () => {
		expect(actions.setStyles("test")).toEqual({
			styles: 'test',
			type: 'SET_STYLES'
		});
	})

	it('should dispatch SET_ROUTE action', () => {
		expect(actions.setRoute("test")).toEqual({
			route: 'test',
			type: 'SET_ROUTE'
		});
	})

	/* describe('openProjectAction', () => {

		it('should open a project', () => {

			const MOCK_FILE_INFO = {
				'/path/to/workspace/project_1': 'project.js',
				'/path/to/workspace/project_2': 'project.js',
			};

			require('fs').__setMockFiles(MOCK_FILE_INFO);

			const path_to_workspace = "/path/to/workspace";

			const mockState = {}

			const store = mockStore({
				workspace: {
					path: path_to_workspace
				},
				appState: {
					path: '/path/to/workspace/project_2'
				}
			})

			store.getState = () => mockState

			const path = path_to_workspace + "/new_project";

			store.dispatch(actions.openProjectAction(path))

			const executed_actions = store.getActions();

			expect(executed_actions).toEqual([
				{
					"payload": [
						{ name: "project_1", path: "/path/to/workspace/project_1", isCurrentlyOpen: false },
						{ name: "project_2", path: "/path/to/workspace/project_2", isCurrentlyOpen: true }
					],
					"type": "WORKSPACE_SET_PROJECTS"
				}
			])
		})
	}) */

//});