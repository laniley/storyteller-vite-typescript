import * as projectReducer from './../../../../../../../../../store/project/project.reducer';
import { PagePreview } from '../../../../../../../../../components';
import TextInput from "../../../../../../../../../components/TextInput/TextInput";
import { useAppSelector, useAppDispatch } from './../../../../../../../../../hooks'

export default function Abstract() {

	const dispatch = useAppDispatch();
	const abstract = useAppSelector(state => state.project.abstract)

	var text = abstract

	function save() {
		dispatch(projectReducer.setAbstract(text))
		//dispatch(projectReducer.save())
	}

	return (
		<div id="Abstract" data-testid="Abstract" style={{
			width: `100%`,
			height: `100%`,
		}}>
			<PagePreview content={
				<TextInput
					id="AbstractInput"
					placeholder="Abstract..."
					html={text} // innerHTML of the editable div
					disabled={false} // use true to disable edition
					multiLine={true}
					save={() => save}
					style={{
						height: `100%`,
					}}
				/>
			} />
		</div>
	);
}