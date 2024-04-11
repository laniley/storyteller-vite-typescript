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
	const title = useAppSelector(state => state.workspace.current_project_title)
	const theme = useAppSelector(state => state.appState.theme)

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
			<div id="Title" className={`typewriter font-semibold flex items-center p-3 bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-2xl`}>{title}</div>
			<div id="rootContent" className="absolute flex flex-col w-full top-[100px] bottom-0">
				<div><Content /></div>
			</div>
		</div>
	);
}

export function Content() {

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