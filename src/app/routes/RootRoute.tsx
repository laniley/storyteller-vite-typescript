import React from 'react';
import { useAppSelector, useAppDispatch } from './../hooks'
import { connect } from 'react-redux';

import * as appStateActions from "../store/appState/appState.actions";
//import * as workspaceActions from "../store/workspace/workspace.actions";
import * as projectActions from "../store/project/project.actions";

//import WelcomeRoute from './RootRouteSubroutes/WelcomeRoute/WelcomeRoute';
//import ProjectRoute from './RootRouteSubroutes/ProjectRoute/ProjectRoute';

const app = require('@electron/remote').app
const fs = require('fs');
const path = require('path');

const dataPath = app.getPath('userData');
const filePath = path.join(dataPath, 'config.json');

console.log(dataPath)
console.log(filePath)

function RootRoute() {

	const dispatch = useAppDispatch();

	const fileContent = fs.readFileSync( filePath, { encoding: 'utf8', flag: 'r' } )
	const result = JSON.parse(fileContent)

	if (result.data.theme) {
		console.log("theme: " + result.data.theme);
		//props.setTheme(result.data.theme);
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
		<div id="RootRoute">
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
		//return <WelcomeRoute />
		return <div>"Welcome"</div>
	}
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
		justifyContent: 'center',
	}
}

export function mapDispatch(dispatch:any) {
	return {
	//setTheme: (theme:string) => dispatch(appStateActions.setTheme(theme)),
	//openWorkspace: (filePath) => { dispatch(workspaceActions.openWorkspace(filePath)) },
		openProject: (filePath:string) => { dispatch(projectActions.openProjectAction(filePath)) },
	};
}


export default connect(
	null,
	mapDispatch,
)(RootRoute)