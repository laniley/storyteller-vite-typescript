import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../../hooks'

import * as workspaceReducer from "../../../../../store/workspace/workspace.reducer";
import * as projectReducer from "../../../../../store/project/project.reducer";
//import { save } from '../../store/chapters/chapter.actions';

import ProjectListItem from './ProjectListItem';

import "./ProjectList.css";

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


export default function ProjectList () {

	const dispatch = useAppDispatch();

  const initialState = {
    createIsOpen: false,
    title_of_new_project: "",
    title_of_new_project_is_valid: false
  }

	const [ state, setState ] = useState(initialState)
  const workspace = useAppSelector(state => state.workspace)
  const no_projects = workspace.projects.length == 0
  const show_empty_workspace_text = no_projects && !state.createIsOpen

  let projectListItems = workspace.projects.map((project:Project) => 
      <ProjectListItem
        key={project.title}
        title={project.title}
        isCurrentlyOpen={project.isCurrentlyOpen}
        onClick={() => { console.log('Clicked on project "' + project.title + '"'); dispatch(projectReducer.open(project.title))}}
        onDelete={() => { this.props.deleteProject(project.path); }} 
      />
    )

  function handleSaveClick() {
    dispatch(projectReducer.create(state.title_of_new_project))
    dispatch(workspaceReducer.loadProjects())
    // reset the form values
    setState({
      ...state,
      createIsOpen: false,
      title_of_new_project: ""
    });
  }

  function is_a_valid_new_project_title(new_title:string) {

		new_title = new_title.trim();

		var new_title_is_unique = true;

		workspace.projects.forEach(project => {
			if (project.title == new_title) {
				new_title_is_unique = false;
			}
		})

		return new_title.length > 0 && new_title_is_unique
	}

	return(
		<div className="flex flex-col justify-center mt-3">
      {show_empty_workspace_text &&
        <div className="mb-3">There are currently no projects in this workspace.</div>
      }

      <ButtonGroup id="ProjectList" className='mb-3' minimal={false} vertical={true} style={{ minWidth: "250px" }}>
        {projectListItems}
        <Collapse isOpen={state.createIsOpen}>
          <Pre>
            <InputGroup
              placeholder={"Title of new project..."}
              onChange={(event) => setState({
                ...state,
                title_of_new_project: event.target.value,
                title_of_new_project_is_valid: is_a_valid_new_project_title(event.target.value)
              })}
              autoFocus />
          </Pre>
        </Collapse>
      </ButtonGroup>
      
      {state.createIsOpen &&
        <ButtonGroup>
          <Button id="SaveProjectButton"
          style={{width:"50%"}}
          minimal={false}
          icon={"floppy-disk"}
          text={"Save"}
          disabled={state.title_of_new_project_is_valid ? false : true}
          onClick={ () => handleSaveClick() } />

          <Button id="CancelCreateProjectButton"
            style={{ width: "50%" }}
            minimal={false}
            icon={"delete"}
            text={"Cancel"}
            onClick={ () => setState({
              ...state,
              createIsOpen: false,
              title_of_new_project: ""
            })} 
          />
        </ButtonGroup>
      }
      {!state.createIsOpen &&
        <div className="flex justify-center mt-2">
          <Button id="CreateProjectButton"
            minimal={false}
            icon={"folder-new"}
            text={"Create a new project"}
            intent={Intent.SUCCESS}
            onClick={ () => { setState({ ...state, createIsOpen: true }) }} 
          />
        </div>
      }
    </div>
	);
}