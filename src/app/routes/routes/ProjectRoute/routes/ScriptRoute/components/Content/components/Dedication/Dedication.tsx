import { useAppSelector, useAppDispatch } from './../../../../../../../../../hooks'
import * as projectReducer from "./../../../../../../../../../store/project/project.reducer";
import { PagePreview } from '../../../../../../../../../components';
import TextInput from "../../../../../../../../../components/TextInput/TextInput";

export default function Dedication() {

	const dispatch = useAppDispatch();
	const dedication = useAppSelector(state => state.project.dedication)
	const fontSize = useAppSelector(state => state.project.styles.default.fontSize)
	const textAlign = useAppSelector(state => state.project.styles.dedication.textAlign)

	return (
		<div id="Dedication"
			style={{
				width: `100%`,
				height: '100%',
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				fontSize: fontSize,
			}}>
			<PagePreview
				content={
					<TextInput
						id="DedicationInput"
						placeholder="Dedication..."
						html={dedication} // innerHTML of the editable div
						onChange={(e:React.FormEvent<HTMLInputElement>) => { dispatch(projectReducer.setDedication(e.currentTarget.value)) }}
						disabled={false} // use true to disable edition
						multiLine={true}
						save={ () => { return dispatch(projectReducer.save()) }}
						style={{
							textAlign: textAlign
						}}
					/>
				} />
		</div>
	);
	
}