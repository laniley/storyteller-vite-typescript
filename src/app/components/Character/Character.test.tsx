import { screen, act } from '@testing-library/react'
import { renderWithProviders } from './../../utils/test-utils'
import Character from './Character';

describe('Character component', () => {

	it('renders', async() => {
		await act(async() => renderWithProviders(<Character /*character={{ first_name: "first_name", last_name: "last_name" }}*/ />))
		expect(screen.getAllByTestId('Character').length).toEqual(1);
		//expect(result.text()).toEqual('All Characters / first_name last_name<Blueprint3.Button /><Blueprint3.Alert />');
	});

});
