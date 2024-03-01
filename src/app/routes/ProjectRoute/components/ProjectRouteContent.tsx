import { useAppSelector, useAppDispatch } from '../../../hooks'
import ScriptRoute from '../subroutes/ScriptRoute/ScriptRoute';
import CharactersRoute from '../subroutes/CharactersRoute/CharactersRoute';
import PreviewRoute from '../subroutes/PreviewRoute/PreviewRoute';

import {
	Timeline,
} from '../../../components';

export default function ProjectRouteContent() {

	const appState = useAppSelector(state => state.appState)
	const project = useAppSelector(state => state.project)

	function Content() {

		if (!project) return null;
	
		switch (project.route.current) {
	
			case 'characters':
				return <CharactersRoute />
			case 'locations':
				return <h2>Locations</h2>
			case 'timeline':
				return <Timeline />
			case 'preview':
				return <PreviewRoute />
			default:
				return <ScriptRoute />;
		}
	}

	return (
		<Content />
	);
}