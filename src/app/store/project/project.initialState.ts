
export const initialState = {
	title: "",
	path: "",
	isCurrentlyOpen: false,
	cover: "",
	author: "",
	abstract: "",
	dedication: "",
	selectedChapter: "",
	route: {
		current: "script",
		script: {
			current: "cover"
		},
		characters: {

		},
		locations: {

		},
		timeline: {

		}
	},
	styles: { 
		default: { 
			fontSize: "1em",
			textAlign: "left"
		}, 
		title: {
			fontSize: "4em",
		}, 
		dedication: {
			textAlign: "center"
		}}
} as Project;
