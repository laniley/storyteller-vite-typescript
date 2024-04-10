import { waitFor } from '@testing-library/react'
import { render } from './../../../../../../../../../../utils/test-utils'
import Abstract from './Abstract';

describe('Abstract component', () => {

	it('renders', async() => {
		const {getAllById} = render(<Abstract />) 
		await waitFor(() => {
			expect(getAllById('Abstract').length).toEqual(1);
		})
	});

})
