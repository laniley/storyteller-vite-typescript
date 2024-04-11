import { useAppSelector, useAppDispatch } from '../../hooks'

import ContentEditable from "react-contenteditable";
//import ReactHtmlParser from 'react-html-parser';

//import './TextInput.css';

interface TextInputProps {
	id:string, 
	style: {},
	placeholder: string,
	html: string,
	disabled: boolean,
	multiLine: boolean,
	onChange: (e:React.FormEvent<HTMLInputElement>) => void,
	//save: () => {}
}

export default function TextInput(props:TextInputProps) {

	const html = props.html || ""
	const	isInEditMode = !props.html || props.html.length <= 0
	const mouseOver = false
/*
	constructor(props) {

		super(props);

		this.state = {
			
			initial_value: props.html || "",
			
			multiLine: props.multiLine,
		};
	}
*/
		return (
			<ContentEditable
				id={props.id}
				style={props.style}
				className={`${isInEditMode || mouseOver ? 'showBorder ' : ''}` + "editable"}
				//placeholder={props.placeholder}
				html={html} // innerHTML of the editable div
				disabled={false} // use true to disable edition
				onClick={openEditMode}
				onKeyDown={handleKeyDown}
				onChange={handleChange} // handle innerHTML change
				onBlur={handleBlur} // the element looses focus
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			/>
		);
	}

	function onMouseEnter() {
		this.setState({ mouseOver: true })
	}

	function onMouseLeave() {
		this.setState({ mouseOver: false })
	}

	function openEditMode() {
		this.setState({ isInEditMode: true });
	}

	function closeEditMode() {
		this.setState({ isInEditMode: false })
	}

	function undoEditing() {
		this.setState({
			isInEditMode: !this.props.html || this.props.html.length <= 0,
			html: this.props.initial_value
		});
	}

	function handleChange(event:any) {

		if (this.props.onChange) {
			this.props.onChange(event)
		}

		this.setState({
			html: event.target.value,
		});
	}

	function handleKeyDown(event:any) {
		if (event.which === 13 && !this.state.multiLine) {
			event.preventDefault();
			document.getElementById(this.props.id).blur();
			window.getSelection().removeAllRanges();
			this.handleBlur();
		}
	}

	function handleBlur() {
		if (this.state.html !== this.state.initial_value) {
			this.state.initial_value = this.state.html;
			this.props.save();
		}

		this.closeEditMode();
	}
