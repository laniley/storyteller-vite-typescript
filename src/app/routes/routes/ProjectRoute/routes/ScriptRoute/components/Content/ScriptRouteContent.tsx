import { useAppSelector, useAppDispatch } from '../../../../../../../hooks'

import Abstract from './components/Abstract/Abstract';
import TitleAndAuthor from './components/TitleAndAuthor/TitleAndAuthor';
import Dedication from './components/Dedication/Dedication';
import Parts from './components/Parts/Parts'
import Cover from './components/Cover/Cover'
import Chapters from './components/Chapters/Chapters';

export default function ScriptRouteContent() {

	const project = useAppSelector(state => state.project)

	return (
		<div
			id="ScriptRouteContent"
			data-testid="ScriptRouteContent"
			style={{
				width: '100%',
				height: '100%'
			}}>
			<Content route={project.route.script.current} />
		</div>
	);
}

export function Content(props: { route?:string }) {
	if (props.route === "title_author") {
		return (<TitleAndAuthor />);
	}

	if (props.route === "abstract") {
		return (<Abstract />);
	}

	if (props.route === "dedication") {
		return (<Dedication />);
	}
	/*
	if (props.route === "parts") {
		return (<Parts />);
	}
*/
	if (props.route === "chapters") {
		return (<Chapters />);
	}

	return (<Cover />);
}