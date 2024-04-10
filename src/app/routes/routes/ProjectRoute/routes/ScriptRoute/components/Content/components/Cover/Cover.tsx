import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../../../../../../hooks'

import { PagePreview } from '../../../../../../../../../components';
import { getBorderStyle, getColor } from '../../../../../../../../../store/appState/appState.selectors';

const path = require('path');
const remote = require('@electron/remote')
const dialog = remote.dialog;
const fs = require('fs');

import {
	Button,
	Colors,
	Icon
} from '@blueprintjs/core';

import "./Cover.css";

export default function Cover() {

	const appState = useAppSelector(state => state.appState)
	const workspace = useAppSelector(state => state.workspace)
	const project = useAppSelector(state => state.project)

	const initialState = {
    coverFolderPath: path.join(appState.workspace, workspace.current_project_title, "src", "assets", "cover"),
		fileName: "",
		isHovering: false,
  }

	// without a cover
	var content =
		<div id="cover-preview-empty">
			<Icon icon="media" size={100} style={{
				alignSelf: `center`,
				color: getColor(appState)
			}} />
			<Button
				id="OpenProjectButton"
				minimal={true}
				icon="folder-open"
				text="Browse"
				style={{ marginTop: "20px" }}
				onClick={() => {
					dialog.showOpenDialog({
						properties: ['openFile'],
						filters: [
							{ name: 'Images', extensions: ['jpg', 'png', 'gif'] },
						]
					}).then((result: { canceled: boolean; filePaths: string[]; }) => {
						console.log("result: " + JSON.stringify(result));
						if (!result.canceled) {
							this.onUpdateCover(result.filePaths[0])
						}
					});
				}}
			/>
		</div>;

		// with a cover
		if (project.cover && project.cover.length > 0) {
			content =
				<div id="cover-preview-filled"
					onMouseEnter={this.handleMouseHover.bind(this)}
					onMouseLeave={this.handleMouseHover.bind(this)}
				>
					<img src={this.props.project.cover} />
					{
						this.state.isHovering &&

						<div id="cover-preview-overlay" />
					}
					{
						this.state.isHovering &&
						<Button
							id="OpenProjectButton"
							minimal={this.state.minimal}
							icon="folder-open"
							text="Browse"
							style={this.props.style}
							onClick={() => {
								dialog.showOpenDialog({
									properties: ['openFile'],
									filters: [
										{ name: 'Images', extensions: ['jpg', 'png', 'gif'] },
									]
								}).then((result: { canceled: boolean; filePaths: string[]; }) => {
									console.log("result: " + JSON.stringify(result));
									if (!result.canceled) {
										this.onUpdateCover(result.filePaths[0])
									}
								});
							}}
						/>
					}
				</div>;
		}

		return (
			<div id="Cover" style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}>
				<PagePreview content={content} />
			</div>
		);
	}
/*
	onUpdateCover(filePath) {

		if (!filePath) return;

		if (!fs.existsSync(this.props.appState.path + "\\src")) {
			fs.mkdirSync(this.props.appState.path + "\\src");
		}

		if (!fs.existsSync(this.props.appState.path + "\\src\\assets")) {
			fs.mkdirSync(this.props.appState.path + "\\src\\assets");
		}

		if (!fs.existsSync(this.state.coverFolderPath)) {
			fs.mkdirSync(this.state.coverFolderPath);
		}

		var filePathArr = filePath.split("\\");
		var fileName = filePathArr[filePathArr.length - 1];

        // copy file into project folder
 		fs.copyFile(filePath, this.state.coverFolderPath + fileName, (err) => {

			if (err) throw err;

			console.log(fileName + ' was copied to ' + this.state.coverFolderPath);

			this.setState({
				"fileName": fileName,
				"filePath": this.state.coverFolderPath + fileName,
				"hasSelection": true
			});

			this.save();
		});
	}

	save() {
		this.props.setCover(this.state.filePath);
		this.props.saveProject();
	}

	handleMouseHover() {
		this.setState(this.toggleHoverState);
	}

	toggleHoverState(state) {
		return {
			isHovering: !state.isHovering,
		};
	}*/

/*
function mapStateToProps({ appState, project }, ownProps) {

	return {
		appState,
		project,
		borderStyle: getBorderStyle(appState),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setCover: filePath => dispatch(projectActions.setCover(filePath)),
		saveProject: () => dispatch(projectActions.save()),
	};
}
*/