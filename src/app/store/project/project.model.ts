export type Project = { 
  title: string; 
  path: any; 
  isCurrentlyOpen: boolean;
  cover: string,
	author: string,
	abstract: string,
	dedication: string,
	selectedChapter: string,
  route: { 
		current: string,
		script: {
			current: string
		},
		characters: {
			current: string
		},
		locations: {
			current: string
		},
		timeline: {
			current: string
		}
	},
	styles: { 
		default: { 
			fontSize: string,
			textAlign: "left" | "center" | "right"
		}, 
		title?: {
			fontSize: string,
		}, 
		dedication: {
			textAlign: string
		}}
}

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
