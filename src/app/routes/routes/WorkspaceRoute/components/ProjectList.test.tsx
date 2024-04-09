import { render, screen } from '@testing-library/react';
import ProjectList from './ProjectList';

jest.mock('@electron/remote', () => ({ exec: jest.fn() }));
jest.mock('app', () => ({ exec: jest.fn() }));

describe('ProjectList component', () => {

	it('renders', () => {

		render(
			<ProjectList />
		);

		screen.debug();
	})

})