import React from 'react';
import { useAppSelector, useAppDispatch } from './../../../hooks'

import { getRoute } from './../../../store/project/project.selectors';

import Workspace from './../../../components/Workspace/Workspace';
import ScriptRoute from '../ProjectRouteSubroutes/ScriptRoute/ScriptRoute';
import CharactersRoute from '../ProjectRouteSubroutes/CharactersRoutes/CharactersRoute';
import PreviewRoute from '../ProjectRouteSubroutes/PreviewRoute/PreviewRoute';

import {
	Timeline,
} from './../../../components';

export default function ProjectRouteContent() {

	const appState = useAppSelector(state => state.appState)
	const project = useAppSelector(state => state.project)

	function Content(props:any) {

		if (!project) return null;
	
		switch (project.route.current) {
	
			case 'workspace':
				return <Workspace />
	
			case 'script':
				return <ScriptRoute />
	/*
			case 'characters':
				return <CharactersRoute path_to_project={props.appState.path} />
	
			case 'locations':
				return <h2>Locations</h2>
	
			case 'timeline':
				return <Timeline />
	
			case 'preview':
				return <PreviewRoute />

			default:
				return <ScriptRoute path_to_project={props.appState.path} />;
					*/
		}
	}

	return (
		<Content id="ProjectRouteContent" />
	);
}

/*
function mapStateToProps({ appState, project }) {
	return {
		appState,
		project,
		route: getRoute(project),
	};
}
*/