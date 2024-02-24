import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './../hooks'

import * as appStateReducer from "./../store/appState/appState.reducer";
import * as workspace from "./../store/workspace/workspace.reducer";
import * as project from "../store/project/project.reducer";

import WelcomeRoute from './WelcomeRoute/WelcomeRoute';
import WorkspaceRoute from './WorkspaceRoute/WorkspaceRoute';
import ProjectRoute from './ProjectRoute/ProjectRoute';

import { dataPath, filePath, storage } from '../../api/appStateAPI'
import { TopNavBar } from '../components';

console.log("dataPath: " + dataPath)
console.log("filePath: " + filePath)

export default function RootRoute() {

	const dispatch = useAppDispatch();

	const result = storage.get()
	console.log("storage: ", result)

	if (result.theme) {
		console.log("theme: " + result.theme);
		dispatch(appStateReducer.setTheme(result.theme))
	}
	else {
		console.log("theme: not set");
	}

	if (result.workspace) {
		console.log("workspace: " + result.workspace);
		dispatch(appStateReducer.setWorkspace(result.workspace))
		//dispatch(workspace.setPath(result.workspace))
		dispatch(workspace.loadProjects())
	}
	else {
		console.log("workspace: not set");
		dispatch(appStateReducer.changeCurrentRootRoute('welcome'))
		
	}

	if (result.route) {
		console.log("route: " + result.route);
		dispatch(appStateReducer.setRoute(result.route))
	}
	else {
		console.log("route: not set");
	}

	if (result.current_project_title) {
		console.log("current_project: " + result.current_project_title);
		dispatch(project.open(result.current_project_title))
	}
	else {
		console.log("current_project: not set");
	}

	return (
		<div id="RootRoute" className="h-screen">
			<TopNavBar />
			<div id="rootContent" className="absolute w-full top-[50px] bottom-0">
				<Content />
			</div>
		</div>
	);
}

function Content() {
	const root_route = useAppSelector(state => state.appState.route)
	const workspace_path = useAppSelector(state => state.appState.workspace)
	const current_project = useAppSelector(state => state.appState.current_project_title)
	
	if(root_route == 'project' && current_project) {
		return <ProjectRoute />
	}
	else if (workspace_path) {
		return <WorkspaceRoute />
	}
	else {
		return <WelcomeRoute />
	}
}