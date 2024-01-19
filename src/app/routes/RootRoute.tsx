import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './../hooks'

import * as appState from "./../store/appState/appState.reducer";
import * as workspace from "./../store/workspace/workspace.reducer";
import * as project from "../store/project/project.reducer";

import WelcomeRoute from './WelcomeRoute/WelcomeRoute';
import ProjectRoute from './ProjectRoute/ProjectRoute';

import { dataPath, filePath, storage } from '../../api/appStateAPI'
import { TopNavBar } from '../components';

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

	if (result.data.current_project_title) {
		console.log("current_project: " + result.data.current_project_title);
		dispatch(project.open(result.data.current_project_title))
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

export function Content() {
	const current_project = useAppSelector(state => state.appState.current_project_title)
	if (current_project) {
		return <ProjectRoute />
	}
	else {
		return <WelcomeRoute />
	}
}