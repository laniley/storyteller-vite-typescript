import PagePreview from './PagePreview.js';
import { shallow, mount, render } from 'enzyme';

describe('PagePreview component', () => {

	it('renders', () => {

		const abstract = shallow(
			<PagePreview content={undefined} />
		);

		const result = abstract.find('#PagePreview');
		expect(result.length).toEqual(1);
	})

})
