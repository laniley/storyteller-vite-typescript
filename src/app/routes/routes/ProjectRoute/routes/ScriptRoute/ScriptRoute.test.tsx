import { waitFor } from '@testing-library/react'
import { render } from '../../../../../../utils/test-utils'
import ScriptRoute from './ScriptRoute';

describe('ScriptRoute component', () => {

	it('renders', async() => {
    const {getAllById} = render(<ScriptRoute />) 
		await waitFor(() => {
			expect(getAllById('ScriptRoute').length).toEqual(1);
		})
	});

})
