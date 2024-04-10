import { screen, act } from '@testing-library/react';
import { renderWithProviders } from './../../../../utils/test-utils'
import ProjectList from './ProjectList';

describe('ProjectList component', () => {

	it('renders', async() => {
		await act(async() => renderWithProviders(<ProjectList />))
		expect(screen.getAllByTestId('ProjectList').length).toEqual(1);
	});

})