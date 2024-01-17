import React from 'react';
import { useAppSelector, useAppDispatch } from './../../hooks'
import { connect } from 'react-redux';

//import * as appStateActions from "../../store/appState/appState.actions";
import * as projectActions from "../../store/project/project.actions";

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

export default function TopNavBar () {
/*
	handleTabChange(navbarTabId) {
		if (navbarTabId != useAppSelector(state => state.project.route.current)) {
			this.props.changeCurrentRootRoute(navbarTabId);
			this.props.save();
		}
		else {
			console.log("Current route already is \\" + useAppSelector(state => state.project.route.current))
		}
	}
*/
	return (
		
		<Navbar id="TopNavBarContainer" className={'px-2 py-0 ' + useAppSelector(state => state.appState.theme)}>
			<NavbarGroup id="TopNavBarGroupLeft" align={Alignment.LEFT}>
				{/* SETTINGS DROPDOWN */}
				<Popover content={<Settings />} position={Position.BOTTOM_RIGHT}>
					<Button minimal={true} icon="settings" />
				</Popover>

				<NavbarDivider />

				{/* SECTION TABS */}
				{useAppSelector(state => state.appState.path) &&

						<Tabs
						id="TopNavTabs"
						//onChange={this.handleTabChange.bind(this)}
						selectedTabId={useAppSelector(state => state.project.route.current)}
						animate={true}>

							<Tab id="workspace" style={{ marginRight: "0px"}} >
								<Icon icon="box" /> Workspace
              </Tab>

							<NavbarDivider style={{ marginRight: "10px" }} />

                            <Tab id="script">
                                <Icon icon="draw" /> Script
                            </Tab>
                            {/* <Tab id="characters">
                                <Icon icon="people" /> Characters
                            </Tab> */}
                            {/* <Tab id="locations">
                                <Icon icon="map-marker" /> Locations
                            </Tab> */}
                            {/* <Tab id="timeline">
                                <Icon icon="time" /> Timeline
							</Tab> */}
							{/* <Tab id="preview">
								<Icon icon="eye-open" /> Preview
							</Tab> */}
                        </Tabs>
                    }

                </NavbarGroup>

				<NavbarGroup id="TopNavBarGroupRight" align={Alignment.RIGHT}>

					{useAppSelector(state => state.appState.path) &&
						<Button
							minimal={true}
							icon="export"
							text="Export"
							//onClick={() => this.props.exportAsEpub()}
						/>
					}

					<NavbarDivider />

					<Tooltip content="Quit Storyteller" position={Position.BOTTOM}>
						<Button
							minimal={true}
							icon="small-cross"
							//onClick={() => remote.app.quit()}
						/>
					</Tooltip>

        </NavbarGroup>
      </Navbar>
    );
	}
/*
function mapDispatchToProps (dispatch) {
	return {
		// project
		openProject: (filePath) => dispatch(projectActions.openProjectAction(filePath)),
		closeProject: () => dispatch(projectActions.closeProjectAction()),
		createProject: (filePath) => dispatch(projectActions.createProjectAction(filePath)),
		archiveProject: () => dispatch(projectActions.archive()),
		exportAsEpub: () => dispatch(projectActions.exportAsEpub()),
		changeCurrentRootRoute: (navbarTabId) => dispatch(projectActions.changeCurrentRootRoute(navbarTabId)),
		save: () => dispatch(projectActions.save()),
		// app_state
		changeTheme: (theme) => dispatch(appStateActions.changeTheme(theme)),
    };
}

export default connect(
	null,
  mapDispatchToProps
)(TopNavBar)
*/