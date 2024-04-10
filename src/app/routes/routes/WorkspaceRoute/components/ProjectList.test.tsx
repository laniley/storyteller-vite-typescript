import { waitFor } from '@testing-library/react'
import { render } from '../../../../../utils/test-utils'
import ProjectList from './ProjectList';

describe('ProjectList component', () => {

	it('renders', async() => {
    const {getAllById} = render(<ProjectList />) 
		await waitFor(() => {
			expect(getAllById('ProjectList').length).toEqual(1);
		})
	});

})