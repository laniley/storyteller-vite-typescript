import { useAppSelector, useAppDispatch } from '../../../../../../hooks'
import { PartTitle } from "../../../../../../components";
import ScriptPartCreationDialog from "../ScriptNav/ScriptPartCreationDialog";

import {
	TextArea,
} from '@blueprintjs/core';

export default function Parts(parts:Part[]) {

	const project = useAppSelector(state => state.project)

	var sorted_parts:Part[] = [];

	if (parts) {
		sorted_parts = parts
			.sort((a, b) => a.position - b.position)
	}

	function PartsList() {
		return (
			sorted_parts
			.map((name, index) => {
				return (
					<div>Part {parts[index].position}: {parts[index].name}</div>
				);
			})
		)
	}

	// var selectedPart = parts[project.];

	return (
		<div>
			
			<PartsList />

			<ScriptPartCreationDialog />

			{/* {selectedPart &&

				// <Route path={`/script/structure/parts/${this.state.selectedPartIndex}`} component={() => { return (
					<div style={{
						display: 'flex',
						flexDirection: 'column',
						overflow: 'auto',
						resize: 'none',
						}}>
						<PartTitle part={selectedPart} />
						<TextArea id="ScriptTextArea"
							style={{
								height: '100%',
								margin: '1%',
								overflow: 'auto',
								border: '1px solid #ddd',
								resize: 'none',
							}}
							onKeyDown={this.onInput}
							value={this.state.text}
						/>
					</div>
				// )}} />
			} */}
		</div>
	);
}
