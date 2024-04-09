import { screen, act } from '@testing-library/react'
import { renderWithProviders } from './../../../../utils/test-utils'
import Workspace from './Workspace';

//import { initialState as appState } from './../../store/appState/appState.model'

describe('Workspace component', () => {

	it('renders', async() => {
		await act(async() => renderWithProviders(<Workspace />))
		expect(screen.getAllByTestId('Workspace').length).toEqual(1);
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
