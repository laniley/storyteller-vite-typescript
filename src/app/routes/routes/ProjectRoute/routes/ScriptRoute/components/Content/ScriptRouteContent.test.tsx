import { waitFor } from '@testing-library/react'
import { render } from '../../../../../../../../utils/test-utils'
import ScriptRouteContent, { Content } from './ScriptRouteContent';

describe('ScriptRouteContent component', () => {

	it('renders', async() => {
    const {getAllById} = render(<ScriptRouteContent />) 
		await waitFor(() => {
			expect(getAllById('ScriptRouteContent').length).toEqual(1);
		})
	});

	describe('Content', () => {

		it('returns the TitleAndAuthor component if route is set to "title_author"', async() => {
			const {getAllById} = render(<Content route={"title_author"} />)
			await waitFor(() => {
				expect(getAllById('TitleAndAuthor').length).toEqual(1);
			})
		})

		it('returns the Abstract component if route is set to "abstract"', async() => {
			const {getAllById} = render(<Content route={"abstract"} />)
			await waitFor(() => {
				expect(getAllById('Abstract').length).toEqual(1);
			})
		})
/*
		it('returns the Dedication component if route is set to "dedication"', async() => {
			const {getAllById} = render(<Content route={"dedication"} />)
			await waitFor(() => {
				expect(getAllById('Dedication').length).toEqual(1);
			})
		})
/*
		it('returns the Dedication component if route is set to "dedication"', () => {
			renderWithProviders(<Content route={"dedication"} />);
			expect(screen.getAllByTestId('Dedication').length).toEqual(1);
		})
/*
		it('returns the Parts component if route is set to "parts"', () => {
			renderWithProviders(<Content route={"parts"} />);
			expect(screen.getAllByTestId('Parts').length).toEqual(1);
		})
*/
/*
		it('returns the Chapters component if route is set to "chapters"', () => {
			renderWithProviders(<Content route={"chapters"} />);
			expect(screen.getAllByTestId('Chapters').length).toEqual(1);
		})
*/
		it('returns the Cover component if route is not set', async() => {
			const {getAllById} = render(<Content />)
			await waitFor(() => {
				expect(getAllById('Cover').length).toEqual(1);
			})
		})
	})
})
