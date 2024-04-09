import { PagePreview } from '../../../../../../../../../components';
import TextInput from "../../../../../../../../../components/TextInput/TextInput";

export default function Abstract() {

	//const text = props.project.abstract

	/*
	componentDidUpdate() {
		if (this.props.project.abstract !== this.state.text) {
			this.setState({ text: this.props.project.abstract });
		}
	}

	save(text) {
		this.props.setAbstract(text);
		this.props.saveProject();
	}
*/
	return (
		<div id="Abstract" style={{
			width: `100%`,
			height: `100%`,
		}}>
			<PagePreview content={
				<TextInput
					id="AbstractInput"
					placeholder="Abstract..."
					html={this.state.text} // innerHTML of the editable div
					disabled={false} // use true to disable edition
					multiLine={true}
					save={this.save.bind(this)}
					style={{
						height: `100%`,
					}}
				/>
			} />
		</div>
	);
}
/*
function mapStateToProps({ project }) {
	return {
		project,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setAbstract: abstract => dispatch(projectActions.setAbstract(abstract)),
		saveProject: () => dispatch(projectActions.save()),
	};
}*/