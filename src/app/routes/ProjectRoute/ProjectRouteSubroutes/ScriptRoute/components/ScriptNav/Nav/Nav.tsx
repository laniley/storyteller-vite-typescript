import React from 'react';
import { useAppSelector, useAppDispatch } from './../../../../../../../hooks'

//import { appStateActions } from "../../../../../../../store/actions";
import * as projectActions from "../../../../../../../store/project/project.actions";

import {
	Tab,
	Tabs,
} from '@blueprintjs/core';

export default function Nav(props:any) {

	const appState = useAppSelector(state => state.appState)
	const project = useAppSelector(state => state.project)

	const selectedTabId = project.route.script ? project.route.script.current : 'abstract'

	function handleTabChange(navbarTabId:string) {
		if (navbarTabId != project.route.script.current) {
			changeCurrentScriptRoute(navbarTabId);
			save();
		}
		else {
			console.log("The current route already is " + navbarTabId)
		}
	}

	return (

			<Tabs
				id="ScriptStructureNav"
				className={appState.theme}
				onChange={() => handleTabChange(selectedTabId)}
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

function mapDispatchToProps(dispatch) {
	return {
		changeCurrentScriptRoute: (navbarTabId) => dispatch(projectActions.changeCurrentScriptRoute(navbarTabId)),
		save: () => dispatch(projectActions.save()),
	};
}
