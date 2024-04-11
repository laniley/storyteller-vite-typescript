import { waitFor } from '@testing-library/react'
import { render } from '../../utils/test-utils'
import RootRoute, { Content } from './RootRoute';
import * as appStateReducer from "./../store/appState/appState.reducer";
import * as workspaceReducer from "./../store/workspace/workspace.reducer";

describe('RootRoute component', () => {

	it('renders', async() => {
    const {getAllById} = render(<RootRoute />) 
		await waitFor(() => {
			expect(getAllById('RootRoute').length).toEqual(1);
		})
	});

	describe('Content component', () => {

		it('renders the WelcomeRoute if no props are set', async() => {
			const {getAllById} = render(<Content />)
			await waitFor(() => {
				expect(getAllById('WelcomeRoute').length).toEqual(1);
			})
		})

		it('renders the ProjectRoute if root_route == "project" && props.current_project is set', async() => {

			const appState = Object.assign({}, appStateReducer.initialState, { route: 'project'})
			const workspace = Object.assign({}, workspaceReducer.initialState, { current_project_title: 'Test'})

			const {getAllById} = render(<Content />, { preloadedState: { appState: appState, workspace: workspace } })
			await waitFor(() => {
				expect(getAllById('ProjectRoute').length).toEqual(1);
			})
		})

		it('renders the WorkspaceRoute if props.workspace_path is set', async() => {

			const appState = Object.assign({}, appStateReducer.initialState, { workspace: '/this/is/a/test/path'})

			const {getAllById} = render(<Content />, { preloadedState: { appState: appState } })
			await waitFor(() => {
				expect(getAllById('WorkspaceRoute').length).toEqual(1);
			})
		})
	})
})
