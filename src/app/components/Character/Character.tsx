import { useState } from 'react';
import * as characterReducer from 'src/app/store/character/character.reducer';
import { useAppSelector, useAppDispatch } from './../../hooks'

import {
	Alert,
	Button,
	ButtonGroup,
	Icon,
	InputGroup,
	Intent,
} from '@blueprintjs/core';

export default function Character(props: {id?: number}) {

	const initialState = {
    moveToTrashIsOpen: false,
  }

	const [ state, setState ] = useState(initialState)
	const characters = useAppSelector(state => state.characters)
	const character = characters.find((characterInArray:Character) => { return characterInArray.id == props.id; });
	
	const appState = useAppSelector(state => state.appState)

	const dispatch = useAppDispatch();

	return (
		<div id="Character">

			<h2>All Characters / {character.first_name} {character.last_name}</h2>

			<Button
				id="DeleteCharacter"
				minimal={true}
				icon="trash"
				text="Delete"
				onClick={() => handleMoveToTrashOpen()}
			/>

			<Alert
				className={appState.theme}
				cancelButtonText="Cancel"
				confirmButtonText="Move to Trash"
				icon="trash"
				intent={Intent.DANGER}
				isOpen={state.moveToTrashIsOpen}
				onCancel={() => handleMoveToTrashCancel()}
				onConfirm={() => handleMoveToTrashConfirm()}
			>
				<p>
					Are you sure you want to move the character <b>{character.first_name} {character.last_name}</b> to Trash?
				</p>
			</Alert>
		</div>
	);
	
	function handleMoveToTrashOpen() {
		setState({...state, moveToTrashIsOpen: true});
	}

	function handleMoveToTrashCancel() {
		setState({...state, moveToTrashIsOpen: false});
	}

	function handleMoveToTrashConfirm() {
		dispatch(characterReducer.setDeletedAt({character: character, deleted_at: Date()}))
		//dispatch(characterReducer.save())
		setState({...state, moveToTrashIsOpen: false});
	}
}