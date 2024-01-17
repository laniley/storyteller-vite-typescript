import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './../hooks'

import * as appState from "./../store/appState/appState.reducer";
import * as workspace from "./../store/workspace/workspace.reducer";
import * as projectActions from "../store/project/project.actions";

import WelcomeRoute from './WelcomeRoute/WelcomeRoute';
//import ProjectRoute from './RootRouteSubroutes/ProjectRoute/ProjectRoute';

import { dataPath, filePath, storage } from '../../api/storage'

console.log("dataPath: " + dataPath)
console.log("filePath: " + filePath)

export default function RootRoute() {

	const dispatch = useAppDispatch();
	const result = storage.get()
	console.log("storage: ")
	console.log(result)

	if (result.data.theme) {
		console.log("theme: " + result.data.theme);
		dispatch(appState.setTheme(result.data.theme))
	}
	else {
		console.log("theme: not set");
	}

	if (result.data.workspace) {
		console.log("workspace: " + result.data.workspace);
		dispatch(workspace.setPath(result.data.workspace))
		dispatch(workspace.loadProjects())
	}
	else {
		console.log("workspace: not set");
	}

	if (result.data.current_project) {
		console.log("current_project: " + result.data.current_project);
		dispatch(projectActions.openProject(result.data.current_project))
	}
	else {
		console.log("current_project: not set");
	}

	return (
		<div id="RootRoute" className="h-screen flex flex-col justify-center">
			<Content />
		</div>
	);
}

export function Content() {
	const current_project = false
	//const current_project = useAppSelector(state => state.app_state.current_project)
	//console.log("current_project: " + current_project)

	if (current_project) {
		//return <ProjectRoute project={props.project} />
		return <div>"Project"</div>
	}
	else {
		return <WelcomeRoute />
	}
}