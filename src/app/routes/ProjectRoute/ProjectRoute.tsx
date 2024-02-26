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
	const theme = useAppSelector(state => state.appState.theme)
	const title = useAppSelector(state => state.workspace.current_project_title)
	const path = useAppSelector(state => state.appState.current_project_path)

  const initialState = {
    statistic: {
			words: 0,
			chars: 0,
		},
  }

	const border = `1px solid ${theme == 'bp3-dark' ? Colors.DARK_GRAY1 : Colors.LIGHT_GRAY1}`
	const pathToOpenProject = path || 'No project selected.'

	return (
		<div
			id="ProjectRoute"
			className={'absolute top-[0px] bottom-0 flex flex-col w-full ' + theme}>
			<div id="Title" className="flex items-center h-7 p-3">{title}</div>
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

			{/* <div
				id="StatusBar"
				style={{
					//backgroundColor: this.props.bgColor,
					//borderTop: this.props.border,
					height: '50px',
					padding: 12,
				}}>
				words: {this.state.statistic.words} - chars: {this.state.statistic.chars}
			</div> */}

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