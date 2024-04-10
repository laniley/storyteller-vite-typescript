import charactersReducer from 'src/app/store/characters/characters.reducer';
import { useAppSelector, useAppDispatch } from './../../hooks'

import {
	Alert,
	Button,
	ButtonGroup,
	Icon,
	InputGroup,
	Intent,
} from '@blueprintjs/core';

export default function Character() {
/*
		this.state = {
			moveToTrashIsOpen: false,

			first_name: (props.character ? props.character.first_name : ""),
			last_name: (props.character ? props.character.last_name : ""),
		};
	
*/

	const appState = useAppSelector(state => state.appState)
	const characters = useAppSelector(state => state.characters)
	//const character = characters.find((characterInArray) => { return characterInArray.id == ownProps.match.params.id; });

	return (
			<div id="Character">

				{/* <h2>All Characters / {this.state.first_name} {this.state.last_name}</h2> */}

				<Button
					id="DeleteCharacter"
					minimal={true}
					icon="trash"
					text="Delete"
					onClick={() => this.handleMoveToTrashOpen()}
				/>

				<Alert
					className={appState.theme}
					cancelButtonText="Cancel"
					confirmButtonText="Move to Trash"
					icon="trash"
					intent={Intent.DANGER}
					isOpen={this.state.moveToTrashIsOpen}
					onCancel={() => this.handleMoveToTrashCancel()}
					onConfirm={() => this.handleMoveToTrashConfirm()}
				>
					<p>
						{/* Are you sure you want to move the character <b>{this.state.first_name} {this.state.last_name}</b> to Trash? */}
					</p>
				</Alert>
			</div>
		);
	/*
	handleMoveToTrashOpen() {
		this.setState({ "moveToTrashIsOpen": true})
	}

	handleMoveToTrashCancel() {
		this.setState({ "moveToTrashIsOpen": false })
	}

	handleMoveToTrashConfirm() {
		this.props.setDeletedAt(this.props.character, Date());
		this.props.saveToFile();
		this.props.history.push("/characters/index");
	}
	*/
}
/*
function mapDispatchToProps(dispatch) {
	return {
		setDeletedAt: (character, deleted_at) => dispatch(charactersActions.setDeletedAt(character, deleted_at)),
		saveToFile: () => dispatch(charactersActions.save()),
	};
}
*/