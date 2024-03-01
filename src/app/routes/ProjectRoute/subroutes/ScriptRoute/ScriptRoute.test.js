import React from 'react';
import { shallow, mount, render } from 'enzyme';

import { ScriptRoute } from '../../subroutes/ScriptRoute/ScriptRoute.js';
import { mapStateToProps, mapDispatchToProps } from '../../subroutes/ScriptRoute/ScriptRoute.js';

describe('ScriptRoute component', () => {

	it('renders', () => {

		const mockProps = ScriptRoute.getMappedProps({
			appState: {
				theme: 'bp3-dark'
			}
		});

		const container = shallow(
			<ScriptRoute {...mockProps} />
		);

		const result = container.find('#ScriptRoute');
		expect(result.length).toEqual(1);
	})

})
