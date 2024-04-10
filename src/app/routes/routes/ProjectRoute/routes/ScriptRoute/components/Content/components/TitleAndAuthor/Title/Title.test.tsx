import { waitFor } from '@testing-library/react'
import { render } from '../../../../../../../../../../../utils/test-utils'
import Title from './Title';

describe('Title component', () => {

	it('renders', async() => {
    const {getAllById} = render(<Title />) 
		await waitFor(() => {
			expect(getAllById('Title').length).toEqual(1);
		})
	});

/*
	it('shows the title of the project in the TextInput component, when the title is not empty', () => {

		const project = Object.assign({}, initialState, {
			title: 'test_title'
		})

		const title = shallow(
			<Title project={project} />
		);

		// find TextInput component
		const titleTextInput = title.find('#TitleInput');

		expect(titleTextInput.render().text()).toEqual('test_title');
	})

	it('div is empty when the title is empty', () => {

		const project = initialState;

		const title = shallow(
			<Title project={project} />
		);

		// find TextInput component
		const titleTextInput = title.find('#TitleInput');

		expect(titleTextInput.render().text()).toEqual('');
	})
*/
})
