import { waitFor } from '@testing-library/react'
import { render } from '../../../../../../../../../../utils/test-utils'
import Dedication from './Dedication';

describe('ScriptRoute component', () => {

	it('renders', async() => {
    const {getAllById} = render(<Dedication />) 
		await waitFor(() => {
			expect(getAllById('Dedication').length).toEqual(1);
		})
	});

})
