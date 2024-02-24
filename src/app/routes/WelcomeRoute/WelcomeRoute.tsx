import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks'

import * as appStateReducer from "./../../store/appState/appState.reducer";

import {
	Button,
	Icon,
} from '@blueprintjs/core';

export default function WelcomeRoute () {

	const dispatch = useAppDispatch();
	const theme = useAppSelector(state => state.appState.theme)

	return (
		<div id="WelcomeRoute" className={'absolute w-full h-full flex flex-col ' + theme}>

			<div className="flex flex-col h-screen justify-center items-center">

				<div className="relative -left-3 top-3">
					Welcome to
				</div>

				<div className="app_name text-5xl mb-8">
					<Icon icon="draw" size={55} className="mr-4" />Storyteller
				</div>

				<Button
					id="SelectWorkspaceButton"
					icon="folder-open"
					text="Select a workspace folder"
					onClick={ () => { dispatch(appStateReducer.changeWorkspace()) }}
				/>

			</div>

		</div>
	);
}
