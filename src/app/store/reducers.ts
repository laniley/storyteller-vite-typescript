// @flow
import { combineReducers } from '@reduxjs/toolkit';
import { routerReducer } from 'react-router-redux';

import appState from './appState/appState.reducer';
import chapters from './chapters/chapters.reducer';
import characters from './characters/reducer.characters.index';
import partsReducer from './parts/parts.reducer';
import project from './project/project.reducer';
import scenes from './scenes/scenes.reducer';
import workspace from './workspace/workspace.reducer';

export const rootReducer = combineReducers({
	appState,
	chapters,
	characters,
	routerReducer,
	partsReducer,
	project,
	scenes,
	workspace
});

export type RootState = ReturnType<typeof rootReducer>;
