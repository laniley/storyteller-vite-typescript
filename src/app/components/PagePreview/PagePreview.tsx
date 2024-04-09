import React from 'react';
import { useAppSelector, useAppDispatch } from './../../hooks'

import { getBorderStyle, getBorderRadius, getBgColor } from '../../store/appState/appState.selectors';

export type PagePreviewProps = {
	content: JSX.Element
}

export default function PagePreview({ content }: PagePreviewProps) {

	const appState = useAppSelector(state => state.appState)

	return (
		<div id="PagePreview" className="page-preview" >
			<div className="page-preview-content" style={{
				border: getBorderStyle(appState),
				borderRadius: getBorderRadius(),
				backgroundColor: getBgColor(appState, "dark"),
			}}>
				<div style={{
					display: `flex`,
					flexDirection: `column`,
					justifyContent: `center`,
					padding: `50px`,
					height: `100%`
				}}>
					{content}
				</div>
			</div>
		</div>
	);
}