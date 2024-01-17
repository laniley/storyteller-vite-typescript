import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from './../../hooks'

import { storage } from '../../../api/storage'
import * as workspaceReducer from "./../../store/workspace/workspace.reducer";

import * as projectActions from "../../store/project/project.actions";

//import { save } from '../../store/chapters/chapter.actions';

import * as ProjectListItem from './ProjectListItem';

import "./Workspace.css";

import {
	Button,
	ButtonGroup,
	Card,
	Collapse,
	FormGroup,
	InputGroup,
	Intent,
	Pre,
} from '@blueprintjs/core';

export default function Workspace () {

	const dispatch = useAppDispatch();

	function Content() {

		const [ createIsOpen ] = useState(false)

		let workspace = useAppSelector(state => state.workspace)
		console.log(workspace)
		console.log(workspace.path)
		let projectListItems = useAppSelector(state => state.workspace.projects).map((project) =>
				<ProjectListItem
					key={project.name}
					project={project}
					isCurrentlyOpen={project.isCurrentlyOpen}
					onClick={() => { this.props.openProject(project.path); this.props.changeCurrentRootRoute('script'); this.props.save(); }}
					onDelete={() => { this.props.deleteProject(project.path); }} />
			)
	
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
					{workspace.path}
					<Button id="ChangeWorkspaceButton"
							icon="folder-open"
							text="Change"
							style={{ marginLeft: "15px" }}
							onClick={ () => { dispatch(workspaceReducer.changeWorkspace()) }} />
					<hr />
					<h2>Projects</h2>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<ButtonGroup id="projectsList" className='mt-4' minimal={false} vertical={true} style={{ minWidth: "250px" }}>
							{projectListItems}
							<Collapse isOpen={createIsOpen}>
								<Pre>
									<InputGroup
										placeholder={"Title of new project..."}
										/*
										onChange={() => this.setState({
											name_of_new_project: event.target.value,
											name_of_new_project_is_valid: this.is_a_valid_new_project_name(event.target.value)
										})}
										*/
										autoFocus />
								</Pre>
							</Collapse>
							{!createIsOpen &&
								<Button id="CreateProjectButton"
								minimal={false}
								icon={"folder-new"}
								text={"Create a new project"}
								intent={Intent.SUCCESS}
								//onClick={this.handleCreateClick.bind(this)} 
								/>
							}
							{createIsOpen &&
								<ButtonGroup>
									<Button id="CreateProjectButton"
									style={{width:"50%"}}
									minimal={false}
									icon={"floppy-disk"}
									text={"Save"}
									disabled={this.state.name_of_new_project_is_valid ? false : true}
									onClick={this.handleSaveClick.bind(this)} />
	
									<Button id="CancelCreateProjectButton"
									style={{ width: "50%" }}
									minimal={false}
									icon={"delete"}
									text={"Cancel"}
									onClick={this.handleCancelClick.bind(this)} />
								</ButtonGroup>
							}
						</ButtonGroup>
					</div>
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

/*
	is_a_valid_new_project_name(new_name) {

		new_name = new_name.trim();

		var new_name_is_unique = true;

		this.props.workspace.projects.forEach(project => {
			if (project.name == new_name) {
				new_name_is_unique = false;
			}
		})

		return new_name.length > 0 && new_name_is_unique
	}

	handleCreateClick() {
		this.setState({ createIsOpen: true });
	}

	handleSaveClick() {
		let path_of_new_project = path.join(this.props.workspace.path, this.state.name_of_new_project);
		console.log(path_of_new_project);
		this.props.createProject(path_of_new_project)
		this.props.loadProjects();
		this.setState({
			createIsOpen: false,
			name_of_new_project: ""
		});
	}

	handleCancelClick() {
		this.setState({
			createIsOpen: false,
			name_of_new_project: ""
		});
	}
}



function mapDispatchToProps(dispatch) {
	return {
		// Workspace
		openWorkspace: (filePath) => { dispatch(workspaceActions.openWorkspace(filePath)) },
		loadProjects: () => dispatch(workspaceActions.loadProjects()),
		// Project
		openProject: (filePath) => dispatch(projectActions.openProjectAction(filePath)),
		createProject: (filePath) => dispatch(projectActions.createProjectAction(filePath)),
		deleteProject: (filePath) => dispatch(projectActions.deleteProject(filePath)),
		changeCurrentRootRoute: (rootRoute) => dispatch(projectActions.changeCurrentRootRoute(rootRoute)),
		save: () => dispatch(projectActions.save()),
	};
}
*/