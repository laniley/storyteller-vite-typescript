import { useAppSelector, useAppDispatch } from '../../../../hooks'
import ScriptRoute from '../routes/ScriptRoute/ScriptRoute';
import CharactersRoute from '../routes/CharactersRoute/CharactersRoute';
import PreviewRoute from '../routes/PreviewRoute/PreviewRoute';
import TimelineRoute from '../routes/TimelineRoute/components/Timeline/Timeline';

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
				return <TimelineRoute />
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