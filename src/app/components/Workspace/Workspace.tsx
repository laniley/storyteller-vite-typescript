import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from './../../hooks'

import * as workspaceReducer from "./../../store/workspace/workspace.reducer";

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

		let workspace = useAppSelector(state => state.workspace)
	
		if (workspace.path === "") {
			return (
				<Button
					id="SelectWorkspaceButton"
					icon="folder-open"
					text="Select a workspace folder"
					onClick={ () => { dispatch(workspaceReducer.changeWorkspace()) }}
				/>
			)
		}
		else {
			return (
				<div>
					<h2>Workspace</h2>
					<hr/>
					<div className="px-0 py-2">
						{workspace.path}
						<Button id="ChangeWorkspaceButton"
							icon="folder-open"
							text="Change"
							style={{ marginLeft: "15px" }}
							onClick={ () => { dispatch(workspaceReducer.changeWorkspace()) }} />
					</div>
					<hr />
					<h2>Projects</h2>
					<ProjectList />
				</div>
			)
		}
	}

	return(
		<div id="Workspace" className={useAppSelector(state => state.appState.theme)}>
			<Card className="shadow-none">
				<Content/>
			</Card>
		</div>
	);
}