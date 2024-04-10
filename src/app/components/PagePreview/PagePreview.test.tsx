import { waitFor } from '@testing-library/react'
import { render } from '../../../utils/test-utils'
import PagePreview from './PagePreview';

describe('PagePreview component', () => {

	it('renders', async() => {
    const {getAllById} = render(<PagePreview content={undefined} />) 
		await waitFor(() => {
			expect(getAllById('PagePreview').length).toEqual(1);
		})
	});

})
