import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../../../hooks'

import {
	Cover,
	TitleAndAuthor,
	Abstract,
} from '../../../../../../components';

import Parts from './../Parts/Parts'
import Chapters from '../../../../../../components/Chapters/Chapters';
import Dedication from '../../../../../../components/Dedication/Dedication';

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