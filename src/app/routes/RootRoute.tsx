import React from 'react';
import { connect } from 'react-redux';

const app = require('@electron/remote').app
const fs = require('fs');
const path = require('path');

const dataPath = app.getPath('userData');
const filePath = path.join(dataPath, 'config.json');

console.log(dataPath)
console.log(filePath)

let data = "Test2"
fs.writeFileSync( filePath,  data)
const result = fs.readFileSync( filePath )
console.log(result)


//let result = storage.getSync('storyteller');

import * as appStateActions from "../store/appState/appState.actions";
//import * as workspaceActions from "../store/workspace/workspace.actions";
//import * as projectActions from "../store/project/project.actions";

//import WelcomeRoute from './RootRouteSubroutes/WelcomeRoute/WelcomeRoute';
//import ProjectRoute from './RootRouteSubroutes/ProjectRoute/ProjectRoute';

type RootRouteState = {
  theme: String
}

export default class RootRoute extends React.Component<{}, RootRouteState> {

	componentWillMount() {
   // let result = storage.getSync('storyteller');
		//console.log(result)
		// console.log("storage-data: " + JSON.stringify(result));
/*
		if (!result.status) {
			return;
		}

		if (result.data.theme) {
			console.log("theme: " + result.data.theme);
			this.setState({ theme: result.data.theme });
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
			//props.openProject(result.data.path);
		}
		else {
			console.log("current_project: not set");
		}
		*/
  }

	render() {
		return (
			<div id="RootRoute">
				{/* <Content appState={this.props.appState} project={this.props.project} /> */}
				<Content appState={{
					path: undefined
				}} project={undefined} />
			</div>
    );
  }
}

export function Content(props: { appState: { path: any; }; project: any; }) {

	if (props.appState.path) {
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