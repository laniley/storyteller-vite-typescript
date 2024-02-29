import React from 'react';
import { connect } from 'react-redux';
import * as projectActions from '../../../../../store/project/project.actions';

import TextInput from "../../../../../components/TextInput/TextInput";

export function Author() {
	return (
		<div id="Author" style={{
			display: "flex",
			flexDirection: "column",
			height: "30%",
			margin: "10px 0",
			fontSize: "24px",
			alignItems: "center",
			justifyContent: "center"
		}}>

			<TextInput
				id="AuthorInput"
				placeholder="Author..."
				html={this.state.author} // innerHTML of the editable div
				disabled={false} // use true to disable edition
				save={this.save.bind(this)}
				onChange={this.onChange.bind(this)}
			/>

		</div>
	)
/*
	constructor(props) {

		super(props);

		this.state = {
			author: this.props.project.author,
		};
	}
*/
	
}

function onChange(event:any) {
	this.setState({ "author": event.target.value });
}

function save(author:string) {
	this.props.setAuthor(author);
	this.props.saveProject();
}
/*
function mapDispatchToProps(dispatch) {
	return {
		setAuthor: author => dispatch(projectActions.setAuthor(author)),
		saveProject: () => dispatch(projectActions.save()),
	};
}
*/
