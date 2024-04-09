import { useAppSelector, useAppDispatch } from '../../../../../hooks'

import { getBorderStyle } from '../../../../../store/appState/appState.selectors';
import ScriptNav from './components/ScriptNav/ScriptNav';
import ScriptRouteContent from './components/Content/ScriptRouteContent';

export default function ScriptRoute() {

	const appState = useAppSelector(state => state.appState)

	const initialState = {
    borderRadius: `3px`,
  }

	return (
		<div 
			id="ScriptRoute"
			data-testid="ScriptRoute"
			className="flex flex-row h-full w-full">
			<div
				id="TreeviewColumn"
				className="mr-[5px] px-[10px] py-[10px] w-[250px]"
				style={{
					minWidth: '250px',
					maxWidth: '400px',
					overflow: 'auto',
					border: getBorderStyle(appState),
					borderRadius: `${initialState.borderRadius}`,
					resize: 'horizontal',
					outline: 'none',
				}}
				//onKeyDown={this.onInput}
			>
				<ScriptNav />
			</div>
			<div
				id="ContentColumn"
				data-testid="ContentColumn"
				className="flex flex-1 justify-center items-center p-[10px]"
				style={{
					overflow: 'auto',
					border: getBorderStyle(appState),
					borderRadius: `${initialState.borderRadius}`,
					resize: 'none',
					outline: 'none',
				}}
			>
				<ScriptRouteContent />
			</div>
		</div>
	);
}