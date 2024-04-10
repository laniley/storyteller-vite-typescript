import { waitFor } from '@testing-library/react'
import { render } from '../../../../utils/test-utils'
import WelcomeRoute from './WelcomeRoute';

describe('WelcomeRoute component', () => {

	it('renders', async() => {
    const {getAllById} = render(<WelcomeRoute />) 
		await waitFor(() => {
			expect(getAllById('WelcomeRoute').length).toEqual(1);
		})
	});

})
