import React from 'react';
import { useAppSelector, useAppDispatch } from './../../../../../../../hooks'
import * as projectReducer from "./../../../../../../../store/project/project.reducer";

import {
	Tab,
	Tabs,
	TabId,
} from '@blueprintjs/core';

export default function Nav(props:any) {

	const dispatch = useAppDispatch();
	const appState = useAppSelector(state => state.appState)
	const project = useAppSelector(state => state.project)

	const selectedTabId = project.route.script ? project.route.script.current : 'abstract'

	function handleTabChange(navbarTabId: TabId) {
		if (navbarTabId != project.route.script.current) {
			console.log("Tab '" + navbarTabId + "' got clicked.")
			dispatch(projectReducer.changeCurrentScriptRoute(navbarTabId))
		}
		else {
			console.log("The current route already is " + navbarTabId)
		}
	}

	return (
		<Tabs
			id="ScriptStructureNav"
			className={appState.theme}
			onChange={handleTabChange}
			selectedTabId={selectedTabId}
			animate={true}
			vertical={props.vertical}>

			<Tab id="cover">Cover</Tab>
			<Tab id="title_author">Title &amp; Author</Tab>
			<Tab id="abstract">Abstract</Tab>
			<Tab id="dedication">Dedication</Tab>
			{/* <Tab id="parts">>Parts</Tab> */}
			<Tab id="chapters">Chapters</Tab>
			{/* <Tab id="scenes">Scenes</Tab> */}

		</Tabs>
	);
}
