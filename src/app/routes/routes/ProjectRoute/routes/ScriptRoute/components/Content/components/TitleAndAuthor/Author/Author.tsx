import { useAppSelector, useAppDispatch } from '../../../../../../../../../../hooks'

import TextInput from "../../../../../../../../../../components/TextInput/TextInput";

export default function Author() {

	const project = useAppSelector(state => state.project)

	return (
		<div id="Author" className="flex flex-col" style={{
			height: "30%",
			margin: "10px 0",
			fontSize: "24px",
			alignItems: "center",
			justifyContent: "center"
		}}>

			<TextInput
				id="AuthorInput"
				placeholder="Author..."
				html={project.author} // innerHTML of the editable div
				disabled={false} // use true to disable edition
				style={{}}
				multiLine={false}
				save={()=>{ return true }}
				//save={save}
				//onChange={onChange}
			/>

		</div>
	)
}
/*
function onChange(event:any) {
	this.setState({ "author": event.target.value });
}*/
/*
function save(author:string) {
	this.props.setAuthor(author);
	this.props.saveProject();
	return true;
}
*/
/*
function mapDispatchToProps(dispatch) {
	return {
		setAuthor: author => dispatch(projectActions.setAuthor(author)),
		saveProject: () => dispatch(projectActions.save()),
	};
}
*/
