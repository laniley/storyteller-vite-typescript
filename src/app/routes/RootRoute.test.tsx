import { waitFor } from '@testing-library/react'
import { render } from '../../utils/test-utils'
import RootRoute, { Content } from './RootRoute';

//jest.mock('electron-json-storage-sync');

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
			const {getAllById} = render(<Content root_route={'project'} current_project={'Test'} />)
			await waitFor(() => {
				expect(getAllById('ProjectRoute').length).toEqual(1);
			})
		})

		it('renders the WorkspaceRoute if props.workspace_path is set', async() => {
			const {getAllById} = render(<Content workspace_path={'/this/is/a/test/path'}/>)
			await waitFor(() => {
				expect(getAllById('WorkspaceRoute').length).toEqual(1);
			})
		})
	})
})
