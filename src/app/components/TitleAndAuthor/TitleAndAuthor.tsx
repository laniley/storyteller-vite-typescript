import React from 'react';
import Title from "./Title/Title";
import Author from "./Author/Author";

import {
	PagePreview
} from '..';

export default function TitleAndAuthor() {

	return (

		<div id="TitleAndAuthor" style={{
			width: `100%`,
			height: `100%`,
		}}>
			<PagePreview content={
				<div id="TitleAndAuthorContent" style={{
					display: `flex`,
					flexDirection: `column`,
					justifyContent: `center`,
					height: `100%`
				}}>
					{/* <Title /> */}
					<Author />
				</div>
			} />
		</div>
	);
}