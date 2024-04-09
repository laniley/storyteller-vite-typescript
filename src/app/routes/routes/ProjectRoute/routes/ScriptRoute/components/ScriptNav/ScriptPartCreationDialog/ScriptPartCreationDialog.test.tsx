import {fireEvent, screen} from '@testing-library/react'
import { renderWithProviders } from './../../../../../../../../utils/test-utils'
//import configureStore from 'redux-mock-store';
import ScriptPartCreationDialog from './ScriptPartCreationDialog';

//const mockStore = configureStore();

//const initialState = {
//};

//let store = mockStore(initialState) //creates the store with any initial state or middleware needed

const project = {
};

describe('RootRoute component', () => {
    it('renders', () => {
        renderWithProviders(<ScriptPartCreationDialog /*isInEditMode={false}*/ />)
    })
})
/*
test('ScriptPartCreationDialog - open edit mode', () => {

    const scriptPartCreationDialog = shallow(
        <ScriptPartCreationDialog isInEditMode={false} />
    );

    const openScriptPartEditModeButton = scriptPartCreationDialog.find('#OpenScriptPartEditModeButton');
    expect(openScriptPartEditModeButton.length).toEqual(1);
    openScriptPartEditModeButton.simulate('click');
    expect(scriptPartCreationDialog.text()).toEqual('<Blueprint3.InputGroup />');
});
*/
/*
test('ScriptPartCreationDialog - close edit mode', () => {

    const scriptPartCreationDialog = shallow(
        <ScriptPartCreationDialog isInEditMode={true} />
    );

    // find input group
    const scriptPartCreationInputGroup = scriptPartCreationDialog.find('#ScriptPartCreationInputGroup')
    expect(scriptPartCreationInputGroup.length).toEqual(1);

    // find close button
    const closeScriptPartEditModeButton = scriptPartCreationInputGroup.dive().find('#CloseScriptPartEditModeButton');
    expect(closeScriptPartEditModeButton.length).toEqual(1);

    // close edit mode
    closeScriptPartEditModeButton.simulate('click');
    const openScriptPartEditModeButton = scriptPartCreationDialog.find('#OpenScriptPartEditModeButton');
    expect(openScriptPartEditModeButton.length).toEqual(1);
});*/
