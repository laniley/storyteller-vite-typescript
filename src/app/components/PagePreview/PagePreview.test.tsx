import { screen, act } from '@testing-library/react'
import { renderWithProviders } from './../../utils/test-utils'
import PagePreview from './PagePreview';

describe('PagePreview component', () => {

	it('renders', async() => {
		await act(async() => renderWithProviders(<PagePreview content={undefined} />))
		expect(screen.getAllByTestId('PagePreview').length).toEqual(1);
	});

})
