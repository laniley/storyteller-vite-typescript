import { shallow, mount, render } from 'enzyme';
import ProjectRoute from './ProjectRoute';

jest.mock('@electron/remote', () => ({ exec: jest.fn() }));
jest.mock('app', () => ({ exec: jest.fn() }));

describe('ProjectRoute component', () => {

	it('renders dark mode', () => {

		const container = shallow(
			<ProjectRoute />
		);

		const result = container.find('#ProjectRoute');
		expect(result.length).toEqual(1);
	})

	it('renders light mode', () => {

		const container = shallow(
			<ProjectRoute />
		);

		const result = container.find('#ProjectRoute');
		expect(result.length).toEqual(1);
	})

})
