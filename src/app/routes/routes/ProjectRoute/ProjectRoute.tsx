import { useAppSelector, useAppDispatch } from './../../../hooks'

import {
	Colors,
} from '@blueprintjs/core';

import { getBgColor } from '../../../store/appState/appState.selectors';

//import { MoveToTrashAlert } from '../../components';

import ProjectRouteContent from './components/ProjectRouteContent';

export default function ProjectRoute() {

	const dispatch = useAppDispatch();
	const theme = useAppSelector(state => state.appState.theme)
	const title = useAppSelector(state => state.workspace.current_project_title)
	const path = useAppSelector(state => state.appState.current_project_path)

  const initialState = {
    statistic: {
			words: 0,
			chars: 0,
		},
  }

	const border = `1px solid ${theme == 'bp3-dark' ? Colors.DARK_GRAY1 : Colors.LIGHT_GRAY1}`
	const pathToOpenProject = path || 'No project selected.'

	return (
		<div
			id="ProjectRoute"
			data-testid="ProjectRoute"
			className={'absolute top-[0px] bottom-0 flex flex-col w-full ' + theme}>
			<div id="Title" className="flex items-center p-3 bg-gray-600 text-lg">{title}</div>
			<div id="Main" className="flex grow p-3 overflow-auto">
				<div className="flex grow justify-center align-center">
					<ProjectRouteContent />
				</div>
			</div>

			{/* <div
				id="StatusBar"
				style={{
					//backgroundColor: this.props.bgColor,
					//borderTop: this.props.border,
					height: '50px',
					padding: 12,
				}}>
				words: {this.state.statistic.words} - chars: {this.state.statistic.chars}
			</div> */}

			{/* <MoveToTrashAlert /> */}

		</div>
	);
}