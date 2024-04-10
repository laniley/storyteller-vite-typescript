// @flow
import { combineReducers } from '@reduxjs/toolkit';
import { routerReducer } from 'react-router-redux';

import appState from './appState/appState.reducer';
import chapters from './chapters/chapters.reducer';
import character from './character/character.reducer';
import characters from './characters/characters.reducer';
import partsReducer from './parts/parts.reducer';
import project from './project/project.reducer';
import scenes from './scenes/scenes.reducer';
import workspace from './workspace/workspace.reducer';

export const rootReducer = combineReducers({
	appState,
	chapters,
	character,
	characters,
	routerReducer,
	partsReducer,
	project,
	scenes,
	workspace
});

export type RootState = ReturnType<typeof rootReducer>;
