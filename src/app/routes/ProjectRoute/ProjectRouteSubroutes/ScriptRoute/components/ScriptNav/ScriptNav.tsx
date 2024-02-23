import React from 'react';
import { connect } from 'react-redux';
import Nav from "./Nav/Nav";
/* import Parts from "./Parts/Parts"; */
import ScriptNavChapters from "./Chapters/ScriptNavChapters";
import Chapter from "./Chapters/ScriptNavChapter"; 
import Scenes from "./Scenes/Scenes";
//import Trash from "./Trash/Trash.index.js";

export default function ScriptNav() {
	return (

			<div id="ScriptStructure">

				<Nav vertical />

				{/* <Parts /> */}

				{/* <ScriptNavChapters /> */}

				{/* <Scenes /> */}

				{/*<Trash content={this.props.trash_content} />*/}

			</div>
        );
	
}
/*
function mapStateToProps({ partsReducer, chapters }) {

	let deleted_chapters = chapters.filter((chapter) => {
		return chapter.deleted_at != null
	});

	let trash_content = deleted_chapters.length > 0 ? deleted_chapters.map(element => {
		return <Chapter
			key={element.id}
			draggableId={`chapter-${element.id}`}
			position={element.position}
			chapter={element}
		/>
	}) : [];

    return {
		parts: partsReducer,
		trash_content: trash_content
    };
}
*/