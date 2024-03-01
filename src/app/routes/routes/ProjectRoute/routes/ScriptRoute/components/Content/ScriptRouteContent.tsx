import React from 'react';
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
			style={{
				width: '100%',
				height: '100%'
			}}>
			<Content route={project.route.script.current} />
		</div>
	);
}

function Content(route:any) {

	if (route === "/script/title_author") {
		return (<TitleAndAuthor />);
	}

	if (route === "/script/abstract") {
		return (<Abstract />);
	}

	if (route === "/script/dedication") {
		return (<Dedication />);
	}

	if (route === "/script/parts") {
		return (<Parts />);
	}

	if (route === "/script/chapters") {
		return (<Chapters />);
	}

	return (<Cover />);
}