import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks'

import * as appStateReducer from "../../../store/appState/appState.reducer";
import * as projectReducer from "../../../store/project/project.reducer";

import './TopNavBar.css';

import Settings from './components/Settings.js';

import {
  Alignment,
  Button,
	Icon,
  Navbar,
  NavbarGroup,
  NavbarDivider,
	Position,
	Popover,
  Tab,
  Tabs,
  Tooltip,
} from '@blueprintjs/core';

const remote = require('@electron/remote')
const app = remote.app

export default function TopNavBar () {

	const appState = useAppSelector(state => state.appState)
	const project = useAppSelector(state => state.project)
	const dispatch = useAppDispatch();

	function selectedTabId() {
		if(appState.route == 'project')
			return project.route.current
		else
			return 'workspace'
	}

	return (
		
		<Navbar id="TopNavBar" className={'sticky top-0 px-2 py-0 ' + appState.theme}>
			<NavbarGroup id="TopNavBarGroupLeft" align={Alignment.LEFT}>
				{/* SETTINGS DROPDOWN */}
				<Popover content={<Settings />} position={Position.BOTTOM_RIGHT}>
					<Button id="TopNavBarSettings" minimal={true} icon="settings" />
				</Popover>

				<NavbarDivider />

				{/* SECTION TABS */}
				<Tabs
					id="TopNavTabs"
					onChange={ (navbarTabId) => handleTabChange(navbarTabId) }
					selectedTabId={selectedTabId()}
					animate={true}
					fill={true}>

						{appState.workspace &&
							<Tab id="workspace" className="mr-0" >
								<Icon icon="box" className="mr-2 ml-2" /> Workspace
							</Tab>
						}

						{appState.workspace &&
							<NavbarDivider className="ml-0 mb-[15px]" />
						}

						{appState.current_project_path &&
							<Tab id="script">
									<Icon icon="draw" className="mr-2" /> Script
							</Tab>
						}
						{appState.current_project_path &&
							<Tab id="characters">
									<Icon icon="people" className="mr-2" /> Characters
							</Tab>
						}
						{appState.current_project_path &&
							<Tab id="locations">
									<Icon icon="map-marker" className="mr-2" /> Locations
							</Tab>
						}
						{appState.current_project_path &&
							<Tab id="timeline">
									<Icon icon="time" className="mr-2" /> Timeline
							</Tab>
						}
						{appState.current_project_path &&
							<Tab id="preview">
								<Icon icon="eye-open" className="mr-2" /> Preview
							</Tab>
						}
						
				</Tabs>
      </NavbarGroup>

			<NavbarGroup id="TopNavBarGroupRight" align={Alignment.RIGHT}>
				{useAppSelector(state => state.appState.current_project_path) &&
					<Button
						id="export"
						minimal={true}
						icon="export"
						text="Export"
						//onClick={() => this.props.exportAsEpub()}
					/>
				}

				<NavbarDivider />

				<Tooltip content="Quit Storyteller" position={Position.BOTTOM}>
					<Button
						id="quit"
						minimal={true}
						icon="small-cross"
						onClick={() => remote.app.quit()}
					/>
				</Tooltip>
      </NavbarGroup>
    </Navbar>
  );

	function handleTabChange(navbarTabId:any) {
		console.log("Tab '" + navbarTabId + "' got clicked.")
		if( navbarTabId == 'workspace' && appState.route != 'workspace' ) {
			dispatch(appStateReducer.changeCurrentRootRoute('workspace'));
		}
		else if (navbarTabId != project.route.current) {
			dispatch(appStateReducer.changeCurrentRootRoute('project'));
			dispatch(projectReducer.changeCurrentProjectRoute(navbarTabId));
		}
		else {
			console.log("Current route is already \\" + project.route.current)
		}
	}
}
/*
function mapDispatchToProps (dispatch) {
	return {
		// project
		archiveProject: () => dispatch(projectActions.archive()),
		exportAsEpub: () => dispatch(projectActions.exportAsEpub()),
    };
}
*/