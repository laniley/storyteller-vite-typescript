import { useAppSelector, useAppDispatch } from './../hooks'

import * as appStateReducer from "./../store/appState/appState.reducer";
import * as workspaceReducer from "./../store/workspace/workspace.reducer";

import WelcomeRoute from './routes/WelcomeRoute/WelcomeRoute';
import WorkspaceRoute from './routes/WorkspaceRoute/WorkspaceRoute';
import ProjectRoute from './routes/ProjectRoute/ProjectRoute';

import { dataPath, filePath, storage } from '../../api/appStateAPI'
import { TopNavBar } from '../components';

console.log("dataPath: " + dataPath)
console.log("filePath: " + filePath)

export default function RootRoute() {

	const dispatch = useAppDispatch();

	const result = storage.get()
	console.log("appState loaded: ", result)

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
		dispatch(workspaceReducer.open())
	}
	else {
		console.log("workspace: not set");
		dispatch(appStateReducer.changeCurrentRootRoute('welcome'))
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
	const current_project = useAppSelector(state => state.workspace.current_project_title)
	
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