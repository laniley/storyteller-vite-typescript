import * as projectReducer from "../../../../../../../../../../store/project/project.reducer";
import TextInput from "../../../../../../../../../../components/TextInput/TextInput";
import { useAppSelector, useAppDispatch } from './../../../../../../../../../../hooks'

export default function Title(props: { style?:any, className?:string }) {

	const dispatch = useAppDispatch();
	const title = useAppSelector(state => state.workspace.current_project_title)
/*
			fontSize: props.fontSize || this.props.project.styles.title.fontSize

	save() {
		this.props.setTitle(this.state.title);
		this.props.saveProject();
	}

	onChange(event) {
		this.setState({ "title": event.target.value });
	}
*/
	return (
		<div id="Title"
			className={props.className}
			style={{
				//fitContent: "100%",
				margin: "10px 0",
				//fontSize: this.state.fontSize,
			}}>
				<TextInput
					id="TitleInput"
					style={props.style}
					placeholder="Title..."
					html={title} // innerHTML of the editable div
					disabled={false} // use true to disable edition
					multiLine={false}
					onChange={(event: any) => { dispatch(projectReducer.setTitle(event.target.value)); }}
					save={() => { return dispatch(projectReducer.save()); }}
				/>

		</div>
	);
}