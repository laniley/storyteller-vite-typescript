import { screen, act } from '@testing-library/react'
import { renderWithProviders } from './../../../utils/test-utils'
import WelcomeRoute from './WelcomeRoute';

describe('WelcomeRoute component', () => {

	it('renders', async() => {
		await act(async() => renderWithProviders(<WelcomeRoute />))
		expect(screen.getAllByTestId('WelcomeRoute').length).toEqual(1);
	});

})
