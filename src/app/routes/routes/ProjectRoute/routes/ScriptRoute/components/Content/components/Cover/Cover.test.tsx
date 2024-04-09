import {screen, act} from '@testing-library/react'
import { renderWithProviders } from './../../../../../../../../../utils/test-utils'
import Cover from './Cover';

describe('Cover component', () => {

	it('renders - without cover set', async() => {
		await act(async() => renderWithProviders(<Cover />))
		expect(screen.getAllByTestId('Cover').length).toEqual(1);
	});
/*
	it('renders - with cover set', () => {

		const mockProps = Cover.getMappedProps({
			project: {
				cover: 'path/to/cover.png',
			}
		});

		const cover = shallow(
			<Cover />
		);

		const result = cover.find('#Cover');
		expect(result.length).toEqual(1);
	});*/
});
