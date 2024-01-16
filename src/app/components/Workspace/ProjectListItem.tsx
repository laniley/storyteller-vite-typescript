import React from 'react';

import {
	Button,
	ButtonGroup,
	Intent,
} from '@blueprintjs/core';

interface ProjectListItem {
	name: string,
  onClick: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void),
  onDelete: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void),
  isCurrentlyOpen: boolean
};

export default function Project(props:ProjectListItem) {
	return (
		<div>Test</div>
	);
}
/*
export default function Project(props:ProjectListItem) {
	return (
		<ButtonGroup key={props.name} style={{display: "flex"}}>
			<Button
				id={props.name}
				text={props.name}
				onClick={props.onClick}
				icon={props.isCurrentlyOpen ? "folder-open" : "folder-close"}
				intent={Intent.PRIMARY}
				active={props.isCurrentlyOpen ? true : false}
				style={{
					flex: "1",
					justifyContent: "left",
					width: "auto"
				}}
			/>
			<Button
				id={props.name + "-delete"}
				onClick={props.onDelete}
				icon={"trash"}
				intent={Intent.DANGER}
				style={{
					justifyContent: "center",
					width: "auto"
				}}
			/>
		</ButtonGroup>
	);
}
*/