import { waitFor } from '@testing-library/react'
import { render } from '../../../../utils/test-utils'
import ProjectRoute from './ProjectRoute';

describe('ProjectRoute component', () => {

	it('renders', async() => {
    const {getAllById} = render(<ProjectRoute />) 
		await waitFor(() => {
			expect(getAllById('ProjectRoute').length).toEqual(1);
		})
	});

})
