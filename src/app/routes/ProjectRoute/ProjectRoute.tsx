import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from './../../hooks'

import {
	Colors,
} from '@blueprintjs/core';

import {
	Timeline,
	TopNavBar,
} from '../../components';

import { getRoute } from '../../store/project/project.selectors';
import { getBgColor } from '../../store/appState/appState.selectors';

//import { MoveToTrashAlert } from '../../components';

import ProjectRouteContent from './ProjectRouteComponents/ProjectRouteContent';

export default function ProjectRoute() {

	const dispatch = useAppDispatch();

  const initialState = {
    statistic: {
			words: 0,
			chars: 0,
		},
  }

	const border = `1px solid ${useAppSelector(state => state.appState.theme) == 'bp3-dark' ? Colors.DARK_GRAY1 : Colors.LIGHT_GRAY1}`
	const pathToOpenProject = useAppSelector(state => state.appState.current_project_path) || 'No project selected.'

	return (
		<div
			id="ProjectRoute"
			className={'flex flex-col h-screen ' + useAppSelector(state => state.appState.theme)}>
			<div id="Main" style={{ display: 'flex', flexGrow: '1', padding: '10px', overflow: 'auto' }}>
				<div style={{
					display: 'flex',
					flexGrow: '1',
					justifyContent: "center",
					alignItems: "center"
				}}>
					<ProjectRouteContent />
				</div>
			</div>

			<div
				id="StatusBar"
				style={{
					//backgroundColor: this.props.bgColor,
					//borderTop: this.props.border,
					height: '50px',
					padding: 12,
				}}>
				{/* words: {this.state.statistic.words} - chars: {this.state.statistic.chars} */}
			</div>

			{/* <MoveToTrashAlert /> */}

		</div>
	);
}
/*
function mapStateToProps({ appState, project }) {
	return {
		route: getRoute(project),
		border: `1px solid ${appState.theme == 'bp3-dark' ? Colors.DARK_GRAY1 : Colors.LIGHT_GRAY1}`,
		,
	};
}*/