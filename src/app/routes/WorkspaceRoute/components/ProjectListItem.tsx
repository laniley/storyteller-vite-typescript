import React from 'react';

import {
	Button,
	ButtonGroup,
	Intent,
} from '@blueprintjs/core';

interface ProjectListItem {
	title: string,
  onClick: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void),
  onDelete: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void),
  isCurrentlyOpen: boolean
};

export default function ProjectListItem(props:ProjectListItem) {
	return (
		<ButtonGroup key={props.title} style={{display: "flex"}}>
			<Button
				id={props.title}
				text={props.title}
				onClick={props.onClick}
				icon={props.isCurrentlyOpen ? "folder-open" : "folder-close"}
				active={props.isCurrentlyOpen ? true : false}
				style={{
					flex: "1",
					justifyContent: "left",
					width: "auto"
				}}
			/>
			<Button
				id={props.title + "-delete"}
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