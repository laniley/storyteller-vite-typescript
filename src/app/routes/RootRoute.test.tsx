import { screen, act } from '@testing-library/react'
import { renderWithProviders } from './../utils/test-utils'
import RootRoute, { Content } from './RootRoute';

//jest.mock('electron-json-storage-sync');

describe('RootRoute component', () => {

	it('renders', async() => {
		await act(async() => renderWithProviders(<RootRoute />))
		expect(screen.getAllByTestId('RootRoute').length).toEqual(1);
	});

	describe('Content component', () => {

		it('renders the WelcomeRoute if no props are set', async() => {
			await act(async() => renderWithProviders(<Content />))
			expect(screen.getAllByTestId('WelcomeRoute').length).toEqual(1);
		})

		it('renders the ProjectRoute if root_route == "project" && props.current_project is set', async() => {
			await act(async() => renderWithProviders(<Content root_route={'project'} current_project={'Test'} />))
			expect(screen.getAllByTestId('ProjectRoute').length).toEqual(1);
		})

		it('renders the WorkspaceRoute if props.workspace_path is set', async() => {
			await act(async() => renderWithProviders(<Content workspace_path={'/this/is/a/test/path'}/>))
			expect(screen.getAllByTestId('WorkspaceRoute').length).toEqual(1);
		})
	})
})
