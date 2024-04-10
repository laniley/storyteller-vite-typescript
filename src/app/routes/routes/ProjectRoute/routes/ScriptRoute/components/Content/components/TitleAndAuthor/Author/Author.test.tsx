import { waitFor } from '@testing-library/react'
import { render } from '../../../../../../../../../../../utils/test-utils'
import Author from './Author';

import { initialState } from '../../../../../../../../../../store/project/project.model.js'

describe('Author component', () => {

	it('renders', async() => {
    const {getAllById} = render(<Author />) 
		await waitFor(() => {
			expect(getAllById('Author').length).toEqual(1);
		})
	});

/*
	it('shows the author of the project in the TextInput component, when the author is not empty', () => {

		const project = Object.assign({}, initialState, {
			author: 'Max Mustermann'
		})

		const author = shallow(
			<Author />
		);

		// find TextInput component
		const textInput = author.find('#AuthorInput');

		expect(textInput.render().text()).toEqual('Max Mustermann');
	})

	it('div is empty when the author is empty', () => {

		const project = initialState;

		const author = shallow(
			<Author />
		);

		// find TextInput component
		const textInput = author.find('#AuthorInput');

		expect(textInput.render().text()).toEqual('');
	})
*/
})
