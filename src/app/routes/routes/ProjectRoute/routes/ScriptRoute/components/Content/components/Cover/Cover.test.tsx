import { waitFor } from '@testing-library/react'
import { render } from '../../../../../../../../../../utils/test-utils'
import Cover from './Cover';

describe('Cover component', () => {

	it('renders', async() => {
    const {getAllById} = render(<Cover />) 
		await waitFor(() => {
			expect(getAllById('Cover').length).toEqual(1);
		})
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
