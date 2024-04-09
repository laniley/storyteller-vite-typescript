import { screen, act } from '@testing-library/react'
import { renderWithProviders } from './../../../../../../../utils/test-utils'
import ScriptRouteContent, { Content } from './ScriptRouteContent';

describe('ScriptRouteContent component', () => {

	it('renders', async() => {
		await act(async() => renderWithProviders(<ScriptRouteContent />))
		expect(screen.getAllByTestId('ScriptRouteContent').length).toEqual(1);
	});

	describe('Content', () => {

		it('returns the TitleAndAuthor component if route is set to "title_author"', () => {
			renderWithProviders(<Content route={"title_author"} />);
			expect(screen.getAllByTestId('TitleAndAuthor').length).toEqual(1);
		})
/*
		it('returns the Abstract component if route is set to "abstract"', () => {
			renderWithProviders(<Content route={"abstract"} />);
			expect(screen.getAllByTestId('Abstract').length).toEqual(1);
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
		it('returns the Cover component if route is not set', () => {
			renderWithProviders(<Content />);
			expect(screen.getAllByTestId('Cover').length).toEqual(1);
		})
	})
})
