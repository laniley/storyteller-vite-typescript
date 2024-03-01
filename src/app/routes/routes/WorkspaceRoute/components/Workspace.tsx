import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../hooks'

import * as appStateReducer from "../../../../store/appState/appState.reducer";

import "./Workspace.css";

import {
	Button,
	Card,
} from '@blueprintjs/core';

import ProjectList from './ProjectList';

export default function Workspace () {

	const dispatch = useAppDispatch();

	function Content() {

		const [ createIsOpen ] = useState(false)

		let workspace = useAppSelector(state => state.appState.workspace)
	
		return (
			<div id="Workspace">
				<h2 className="mb-2">Workspace</h2>
				<hr/>
				<div className="px-0 py-2">
					{workspace}
					<Button id="ChangeWorkspaceButton"
						icon="folder-open"
						text="Change"
						style={{ marginLeft: "15px" }}
						onClick={ () => { dispatch(appStateReducer.changeWorkspace()) }} />
				</div>
				<hr />
				<h2 className="mt-2 mb-2">Projects</h2>
				<hr />
				<ProjectList />
			</div>
		)
	}

	return(
		<div id="Workspace" className={useAppSelector(state => state.appState.theme)}>
			<Card className="shadow-none">
				<Content/>
			</Card>
		</div>
	);
}