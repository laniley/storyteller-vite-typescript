import { waitFor } from '@testing-library/react'
import { render } from '../../../utils/test-utils'
import { setupStore } from './../../../app/store'
import * as charactersReducer from './../../../app/store/characters/characters.reducer';
import Character from './Character';

describe('Character component', () => {

	const store = setupStore()
  store.dispatch(charactersReducer.addCharacter({id: 1, first_name: "first_name", last_name: "last_name"}))

	const characters = [{id: 1, first_name: "first_name", last_name: "last_name"}]

	it('renders', async() => {
		const {getAllById} = render(<Character id={1} />, { preloadedState: { characters: characters } }) 
		await waitFor(() => {
			expect(getAllById('Character').length).toEqual(1);
		})
	});

});
