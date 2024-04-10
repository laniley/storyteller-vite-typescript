import { screen, act } from '@testing-library/react';
import { renderWithProviders } from './../../../../../../../../../utils/test-utils'
import Abstract from './Abstract';

describe('Abstract component', () => {

	it('renders', async() => {
		await act(async() => renderWithProviders(<Abstract />))
		expect(screen.getAllByTestId('Abstract').length).toEqual(1);
	});

})
