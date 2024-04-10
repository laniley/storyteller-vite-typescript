import { waitFor } from '@testing-library/react'
import { render } from '../../../../utils/test-utils'
import TopNavBar from './TopNavBar';

describe('TopNavBar component', () => {

	it('renders', async() => {
    const {getAllById} = render(<TopNavBar />) 
		await waitFor(() => {
			expect(getAllById('TopNavBar').length).toEqual(1);
		})
	});

})
/*
test('TopNavBar - does not render tabs, when no path it set', () => {

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
