import React from 'react';
import { useAppSelector, useAppDispatch } from './../../../hooks'
import { connect } from 'react-redux';

import TopNavBar from '../../../components/TopNavBar/TopNavBar';
import Workspace from '../../../components/Workspace/Workspace';

import {
	Icon,
} from '@blueprintjs/core';

export default function WelcomeRoute () {

	return (
		<div id="WelcomeRoute" className={'flex flex-col h-screen ' + useAppSelector(state => state.appState.theme)}>

			<TopNavBar/>

			<div className="flex flex-col h-screen justify-center items-center">

				<div className="relative -left-3 top-3">
					Welcome to
				</div>

				<div className="app_name text-5xl mb-8">
					<Icon icon="draw" size={55} className="mr-4" />Storyteller
				</div>

				<Workspace />

			</div>

		</div>
	);
}
