import TextInput from "../../../../../../../../../../components/TextInput/TextInput";
import { useAppSelector, useAppDispatch } from './../../../../../../../../../../hooks'

export default function Title() {

	const title = useAppSelector(state => state.workspace.current_project_title)
/*
	constructor(props) {

		super(props);

		this.state = {
			title: props.title || this.props.project.title,
			fontSize: props.fontSize || this.props.project.styles.title.fontSize
		};
	}

	save() {
		this.props.setTitle(this.state.title);
		this.props.saveProject();
	}

	onChange(event) {
		this.setState({ "title": event.target.value });
	}
*/
	return (
		<div id="Title" data-testid="Title"
			style={{
				display: "flex",
				flexDirection: "column",
				//fitContent: "100%",
				margin: "10px 0",
				//fontSize: this.state.fontSize,
				alignItems: "center",
				justifyContent: "center"
			}}>
				<TextInput
					id="TitleInput"
					data-testid="TitleInput"
					style={{
						textAlign: "center",
						overflow: "hidden"
					}}
					placeholder="Title..."
					html={title} // innerHTML of the editable div
					disabled={false} // use true to disable edition
					multiLine={false}
					//onChange={this.onChange.bind(this)}
					save={() => { return false }}
				/>

		</div>
	);
}
/*
function mapStateToProps({ project }) {
	return {
		project
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setTitle: title => dispatch(projectActions.setTitle(title)),
		saveProject: () => dispatch(projectActions.save()),
	};
}*/