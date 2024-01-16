import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './../hooks'
import { connect } from 'react-redux';

import * as appState from "./../store/appState/appState.reducer";
//import * as workspaceActions from "../store/workspace/workspace.actions";
import * as projectActions from "../store/project/project.actions";

import WelcomeRoute from './RootRouteSubroutes/WelcomeRoute/WelcomeRoute';
//import ProjectRoute from './RootRouteSubroutes/ProjectRoute/ProjectRoute';

import { dataPath, filePath, storage } from './../../utils/storage'

console.log("dataPath: " + dataPath)
console.log("filePath: " + filePath)

function RootRoute() {

	const dispatch = useAppDispatch();
	const result = storage.get(filePath)
	console.log(result)

	if (result.data.theme) {
		console.log("theme: " + result.data.theme);
		useEffect(() => {dispatch(appState.setTheme(result.data.theme)) })
	}
	else {
		console.log("theme: not set");
	}

	if (result.data.workspace) {
		console.log("workspace: " + result.data.workspace);
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

export function mapDispatch(dispatch:any) {
	return {
	//setTheme: (theme:string) => dispatch(appStateActions.setTheme(theme)),
	//openWorkspace: (filePath) => { dispatch(workspaceActions.openWorkspace(filePath)) },
		//openProject: (filePath:string) => { dispatch(projectActions.openProject(filePath)) },
	};
}


export default connect(
	null,
	mapDispatch,
)(RootRoute)