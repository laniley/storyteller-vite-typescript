import {screen, act} from '@testing-library/react'
import { renderWithProviders } from '../../../../utils/test-utils'
import ProjectRoute from './ProjectRoute';

describe('ProjectRoute component', () => {

	it('renders', async() => {
		await act(async() => renderWithProviders(<ProjectRoute />))
		expect(screen.getAllByTestId('ProjectRoute').length).toEqual(1);
	});

})
