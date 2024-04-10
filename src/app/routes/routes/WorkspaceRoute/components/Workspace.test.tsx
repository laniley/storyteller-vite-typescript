import { waitFor } from '@testing-library/react'
import { render } from '../../../../../utils/test-utils'
import Workspace from './Workspace';

//import { initialState as appState } from './../../store/appState/appState.model'

describe('Workspace component', () => {

	it('renders', async() => {
    const {getAllById} = render(<Workspace />) 
		await waitFor(() => {
			expect(getAllById('Workspace').length).toEqual(1);
		})
	});

/*
	it('renders SelectWorkspaceButton if workspace is undefined', () => {

		const container = shallow(
			<Workspace appState={appState} />
		);

		const workspace = container.find('#SelectWorkspaceButton');
		expect(workspace.length).toEqual(1);
	})

	it('renders ChangeWorkspaceButton if workspace is set', () => {

		const workspace = {
			path: "config/test_workspaces/empty_workspace",
			projects: []
		}

		const container = shallow(
			<Workspace appState={appState} workspace={workspace} />
		);

		const changeWorkspaceButton = container.find('#ChangeWorkspaceButton');
		expect(changeWorkspaceButton.length).toEqual(1);
	})
*/
})
