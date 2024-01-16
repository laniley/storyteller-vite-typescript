import React from 'react';
import { useAppSelector, useAppDispatch } from './../../../hooks'
import { connect } from 'react-redux';

//import TopNavBar from '../../../components/TopNavBar/TopNavBar';
//import Workspace from '../../../components/Workspace/Workspace';

import {
	Icon,
} from '@blueprintjs/core';

import './WelcomeRoute.css';

export default function WelcomeRoute () {

	let containerClassName = ".container " + useAppSelector(state => state.appState.theme)

	return (
		<div id="WelcomeRoute" className={containerClassName}>

		{/* <TopNavBar workspaceIsOpen={true} /> */}

		<div className=".content">

			<div className="app_name">
				<Icon icon="draw" iconSize={55} style={{ marginRight: "0.2em"}} />Storyteller
			</div>

			{/* <Workspace /> */}

		</div>

				</div>
	);
}
