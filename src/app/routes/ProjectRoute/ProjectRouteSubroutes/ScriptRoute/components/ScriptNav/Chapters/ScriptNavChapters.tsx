import React from 'react';
import { useAppSelector, useAppDispatch } from './../../../../../../../hooks'
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import ChapterCreationDialog from "../../../../../../../components/Chapters/ChapterCreationDialog/ChapterCreationDialog";
import ScriptNavChapter from "./ScriptNavChapter.js";

import * as chaptersReducer from "../../../../../../../store/chapters/chapter.reducer";
//import { setChapters, save, deleteChapter } from "../../../../../../../store/chapters/chapter.actions";

import {
	Alert,
	Intent,
	Toaster,
} from '@blueprintjs/core';

import './ScriptNavChapters.css';

export default function ScriptNavChapters() {

	const initialState = {
		canEscapeKeyCancel: false,
		canOutsideClickCancel: false,
		moveToTrashAlertIsOpen: false,
		moveToTrashChapter: ScriptNavChapter,
	};

	interface DraggableLocation {
    droppableId: string;
    index: number;
	}

	interface Combine {
    draggableId: string;
    droppableId: string;
	}

	interface DragResult {
    reason: 'DROP' | 'CANCEL';
    destination?: DraggableLocation;
    source: DraggableLocation;
    combine?: Combine;
    mode: 'FLUID' | 'SNAP';
    draggableId: string;
	}

	const appState = useAppSelector(state => state.appState)
	const project = useAppSelector(state => state.project)
	const chaptersState = useAppSelector(state => state.chapters)

	const chapters = chaptersState.chapters.filter((chapter:Chapter) => {
		return chapter.deleted_at == null
	})
	
	const chaptersRouteIsActive = project.route.script && project.route.script.current == 'chapters'
	
	const onDragEnd = (result:DragResult) => {
		// dropped outside the list
		if (!result.destination) {
			return;
		}

		const reordered_elements = reorder(
			chapters,
			result.source.index,
			result.destination.index
		);

		this.props.setCharacters(reordered_elements);
	};

	return (
		<div id="Chapters">
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="droppable">
					{(provided, snapshot) => (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{chapters.sort(sortByPosition).map((chapter:Chapter, index) => (
								<ScriptNavChapter
									key={chapter.id}
									//className={chaptersRouteIsActive && chapter.id == this.props.selectedChapter ? "is_selected" : ""}
									//isSelected={chaptersRouteIsActive && chapter.id == this.props.selectedChapter}
									//draggable
									//draggableId={`chapter-${chapter.id}`}
									//position={chapter.position}
									//chapter={chapter}
									//handleOpenMoveToTrashAlert={() => this.handleOpenMoveToTrashAlert(chapter)}
								/>
							))}

							{provided.placeholder}

						</div>
					)}
				</Droppable>
			</DragDropContext>

			<ChapterCreationDialog />

				<Alert
					className={appState.theme}
					cancelButtonText="Cancel"
					confirmButtonText="Move to Trash"
					icon="trash"
					intent={Intent.DANGER}
					//isOpen={this.state.moveToTrashAlertIsOpen}
					//onCancel={() => this.handleMoveToTrashCancel()}
					//</div>onConfirm={() => this.handleMoveToTrashConfirm(this.state.moveToTrashChapter)}
				>

					<p>
						{/* Are you sure you want to move <b>Chapter {initialState.moveToTrashChapter.position}: {initialState.moveToTrashChapter.title}</b> to Trash? */}
					</p>
				</Alert>

				{/* <Toaster ref={ref => (this.toaster = ref)} /> */}

			</div>
		);
	

/*
	handleOpenMoveToTrashAlert(chapter) {
		this.setState({ moveToTrashAlertIsOpen: true });
		this.setState({ moveToTrashChapter: chapter });
	}

	handleMoveToTrashConfirm(chapter) {
		this.setState({ moveToTrashAlertIsOpen: false });
		this.setState({ moveToTrashChapter: '' });

		this.toaster.show({
			intent: Intent.SUCCESS,
			className: this.props.appState.themeName,
			message: <TOAST_MESSAGE chapter={chapter} />
		});

		this.props.deleteChapter(chapter);
	}

	handleMoveToTrashCancel() {
		this.setState({ moveToTrashAlertIsOpen: false });
		this.setState({ moveToTrashChapter: '' });
	}
	*/
}

function sortByPosition(a:any, b:any) {
	let comparison = 0;
	if (a.position > b.position) {
		comparison = 1;
	} else if (a.position < b.position) {
		comparison = -1;
	}
	return comparison;
}

function TOAST_MESSAGE(chapter:Chapter) {
	return <div><b>Chapter {chapter.position}: {chapter.title}</b> was moved to Trash.</div>
}

// a little function to help us with reordering the result
const reorder = (list:Array<Chapter>, startIndex:number, endIndex:number) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex - 1, 1);
	result.splice(endIndex - 1, 0, removed);
	// renumber the positioning
	var position = 1;
	result.forEach(element => {
		element.position = position;
		position++;
	})
	return result;
};

/*
function mapStateToProps({ appState, project, chapters }) {
	return {
		selectedChapter: project.selectedChapter,
		deleted_chapters: chapters.filter((chapter) => {
			return chapter.deleted_at != null
		})
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setChapters: chapters => dispatch(setChapters(chapters)),
		deleteChapter: chapter => dispatch(deleteChapter(chapter)),
	};
}
*/
