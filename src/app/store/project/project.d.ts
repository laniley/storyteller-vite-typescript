interface Project { 
  title: string; 
  path: any; 
  isCurrentlyOpen: boolean;
  cover: string,
	author: string,
	abstract: string,
	dedication: string,
	selectedChapter: string,
  route: { 
		current: 'script' | 'characters' | 'locations' | 'timeline',
		script?: {
			current: string
		},
		characters?: {
			current: string
		},
		locations?: {
			current: string
		},
		timeline?: {
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