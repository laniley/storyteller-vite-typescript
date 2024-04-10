import { screen, act } from '@testing-library/react'
import { renderWithProviders } from '../../../../../../utils/test-utils'
import ScriptRoute from './ScriptRoute';

describe('ScriptRoute component', () => {

	it('renders', async() => {
		await act(async() => renderWithProviders(<ScriptRoute />))
		expect(screen.getAllByTestId('ScriptRoute').length).toEqual(1);
	});

})
