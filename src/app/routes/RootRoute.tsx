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

	const root_route = useAppSelector(state => state.appState.route)
	const workspace_path = useAppSelector(state => state.appState.workspace)
	const current_project = useAppSelector(state => state.workspace.current_project_title)

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
				<Content root_route={root_route} workspace_path={workspace_path} current_project={current_project} />
			</div>
		</div>
	);
}

export function Content(props: {root_route?:string, current_project?: string, workspace_path?: string}) {
	if(props.root_route == 'project' && props.current_project) {
		return <ProjectRoute />
	}
	else if (props.workspace_path) {
		return <WorkspaceRoute />
	}
	else {
		return <WelcomeRoute />
	}
}