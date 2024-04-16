import { act, screen, waitFor } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import { render } from '../../../../utils/test-utils'
import TopNavBar from './TopNavBar';
import { getById } from 'src/utils/custom-queries';
import * as appStateReducer from 'src/app/store/appState/appState.reducer';
import RootRoute from '../../RootRoute';

describe('TopNavBar component', () => {

	it('renders', async() => {
    const {getAllById} = render(<TopNavBar />) 
		await waitFor(() => {
			expect(getAllById('TopNavBar').length).toEqual(1);
		})
	});

  describe('handleTabChange', () => {

    it('changes the current root route to "workspace" if the tab got clicked and if appState.route != "workspace" ', async() => {
      
      const user = userEvent.setup()
      const appState = Object.assign({}, appStateReducer.initialState, { workspace: './../Storyteller_Test_Workspace'})

      const {getAllById} = render(<RootRoute />, { preloadedState: { appState: appState } })
      act(() => {
        const tab = screen.getByTestId('workspaceTab')
        user.click(tab)
      });
      
      await waitFor(() => {
        expect(getAllById('WorkspaceRoute').length).toEqual(1);
      })
    });

  })
})
/*
test('TopNavBar - does not render tabs, when no project path it set', () => {

    const topNavBar = shallow(
        <TopNavBar/>
    );

    const topNavBarContainer = topNavBar.dive().find('#TopNavBarContainer');
    expect(topNavBarContainer.length).toEqual(1);
    expect(topNavBarContainer.text()).toEqual("<Blueprint3.NavbarGroup /><Blueprint3.NavbarGroup />");

	const TopNavTabs = topNavBarContainer.find('#TopNavTabs');
	expect(TopNavTabs.length).toEqual(0);
});

test('TopNavBar - does render tabs when path is set', () => {

	//appState.path = "./../../../test_projects/test_project_path/";

    const topNavBar = shallow(
		<TopNavBar/>
    );

    const topNavBarContainer = topNavBar.dive().find('#TopNavBarContainer');
    expect(topNavBarContainer.length).toEqual(1);
    expect(topNavBarContainer.text()).toEqual("<Blueprint3.NavbarGroup /><Blueprint3.NavbarGroup />");

	const TopNavTabs = topNavBarContainer.find('#TopNavTabs');
	expect(TopNavTabs.length).toEqual(1);
});*/
