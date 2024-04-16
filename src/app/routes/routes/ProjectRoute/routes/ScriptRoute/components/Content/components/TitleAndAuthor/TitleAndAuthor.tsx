import React from 'react';
import Title from "./Title/Title";
import Author from "./Author/Author";

import {
	PagePreview
} from '../../../../../../../../../components';

export default function TitleAndAuthor() {

	//const style = {textAlign: "center", overflow: "hidden"}
	const style = { color: "var(--bg-color-darker)"}
	const className="flex flex-col items-center justify-center text-2xl"

	return (
		<div id="TitleAndAuthor" className="w-full h-full">
			<PagePreview content={
				<div id="TitleAndAuthorContent" className="flex flex-col justify-center h-full">
					<Title style={style} className={className} />
					<Author style={style} className={className} />
				</div>
			} />
		</div>
	);
}