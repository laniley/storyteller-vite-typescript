import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks'

import ContentEditable from "react-contenteditable";
//import ReactHtmlParser from 'react-html-parser';

import './TextInput.css';

interface TextInputProps {
	id:string, 
	style: {},
	placeholder: string,
	html: string,
	disabled: boolean,
	multiLine: boolean,
	onChange: (e:React.FormEvent<HTMLInputElement>) => void,
	save: () => {}
}

export default function TextInput(props:TextInputProps) {

	const [html, setHtml] = useState(props.html || "");
	const [isInEditMode, setIsInEditMode] = useState(!props.html || props.html.length <= 0);
	const [mouseOver, setMouseOver] = useState(false);
	const initial_value = props.html || ""
	var current_value = props.html || ""
	const multiLine = props.multiLine

	return (
		<ContentEditable
			id={props.id}
			style={props.style}
			className={`${isInEditMode || mouseOver ? 'showBorder ' : ''}` + "editable"}
			//placeholder={props.placeholder}
			html={html} // innerHTML of the editable div
			disabled={false} // use true to disable edition
			onClick={() => { setIsInEditMode(true) }}
			onKeyDown={handleKeyDown}
			onChange={(e:any) => { setHtml(e.target.value) }} // handle innerHTML change
			onBlur={handleBlur} // the element looses focus
			onMouseEnter={() => { setMouseOver(true) }}
			onMouseLeave={() => { setMouseOver(false) }}
		/>
	);

	function closeEditMode() {
		setIsInEditMode(false)
	}

	function undoEditing() {
		this.setState({
			isInEditMode: !html || html.length <= 0,
			html: initial_value
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
		if (html !== current_value) {
			current_value = html;
			props.save();
		}
		closeEditMode();
	}
}