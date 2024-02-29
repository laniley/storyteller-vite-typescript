import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../hooks'

import CharactersCreateRoute from './CharactersCreateRoute.js';

import {
	Button,
	ButtonGroup,
	InputGroup,
} from '@blueprintjs/core';

import {
	Character
} from '../../../../components/index.js';


export default function CharactersRoute() {

	return (
		<div id="CharactersRoute" className="flex flex-col grow">
			<h2>All Characters</h2>
			{/* <div><ActiveCharacters/></div> */}
			<div>
				<Button
					id="OpenCreateCharacterDialogButton"
					minimal={true}
					icon="plus"
					text="Add a new character"
					// onClick={() => this.toggleEditMode()}
				/>
			</div>

			{/* <Trash content={deleted_characters} /> */}
		</div>
	);
}
/*
function ActiveCharacters() {
	return active_characters.map((name, index) => {
		return (
			<div key={active_characters[index].id}>
				{active_characters[index].first_name} {active_characters[index].last_name}
			</div>
		);
	});
}
*/

function active_characters() {
	const characters = useAppSelector(state => state.characters)
	return characters
		.filter((character:Character) => {
			return character.deleted_at == null
		})
		.sort((a, b) => ('' + a.first_name)
		.localeCompare(b.first_name))
}

		/* var deleted_characters = this.props.characters
			.filter((character) => {
				return character.deleted_at != null
			})
			.sort((a, b) => ('' + a.first_name).localeCompare(b.first_name));

		deleted_characters = deleted_characters.map((name, index) => {
				return ({
					label: <div key={deleted_characters[index].id}>
						{deleted_characters[index].first_name} {deleted_characters[index].last_name}
					</div>
				});
			}); */