import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './../hooks'

import * as appState from "./../store/appState/appState.reducer";
import * as workspace from "./../store/workspace/workspace.reducer";
//import * as workspaceActions from "../store/workspace/workspace.actions";
import * as projectActions from "../store/project/project.actions";

import WelcomeRoute from './RootRouteSubroutes/WelcomeRoute/WelcomeRoute';
//import ProjectRoute from './RootRouteSubroutes/ProjectRoute/ProjectRoute';

import { dataPath, filePath, storage } from './../../utils/storage'

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
		dispatch(workspace.openWorkspace())
		//props.openWorkspace(result.data.workspace);
	}
	else {
		console.log("workspace: not set");
	}

	if (result.data.path) {
		console.log("current_project: " + result.data.path);
		dispatch(projectActions.openProject(result.data.path))
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

	const path = useAppSelector(state => state.appState.path)
	console.log("path: " + path)

	if (path) {
		//return <ProjectRoute project={props.project} />
		return <div>"Project"</div>
	}
	else {
		return <WelcomeRoute />
	}
}