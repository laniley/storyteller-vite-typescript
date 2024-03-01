import React from 'react';
import { connect } from 'react-redux';
import * as projectActions from '../../../../../../../../../store/project/project.actions';

import Chapter from "./Chapter/Chapter";
import ChapterCreationDialog from "./ChapterCreationDialog/ChapterCreationDialog";

import "./Chapters.css"

export default function Chapters() {

		var content =
			<div>
				<div style={{ paddingBottom: '15px' }}>
					Your project has no chapters yet. Start writing your book by creating the first chapter now.
				</div>
				<div><ChapterCreationDialog /></div>
			</div>

		if (this.props.chapter) {
			content = <Chapter key={this.props.chapter.id} chapter={this.props.chapter} />
		}

		return (
			<div id="Chapters" style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: `100%`,
				height: `100%`,
			}}>
				{content}
			</div>
		);
	
}

function mapStateToProps({ project, chapters }) {
	return {
		project,
		chapter: project.selectedChapter || chapters[0],
	};
}

function mapDispatchToProps(dispatch) {
	return {
		saveProject: () => dispatch(projectActions.save()),
	};
}
