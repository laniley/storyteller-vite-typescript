import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks'

import TopNavBar from '../../components/TopNavBar/TopNavBar';
import Workspace from './components/Workspace';

import {
	Icon,
} from '@blueprintjs/core';

export default function WelcomeRoute () {

  const theme = useAppSelector(state => state.appState.theme)

	return (
		<div id="WorkspaceRoute" className={'absolute w-full h-full flex flex-col ' + theme}>
			<div className="flex flex-col h-screen justify-center items-center">
				<Workspace />
			</div>
		</div>
	);
}
