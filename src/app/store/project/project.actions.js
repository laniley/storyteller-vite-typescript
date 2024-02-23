import { exportAsEpub } from './project.actions.export.epub.index';
export { exportAsEpub };

const fs = require('fs-extra');

const path = require('path');

// ############ ACTION TYPES ##############
export const SET_SELECTED_CHAPTER = 'SET_SELECTED_CHAPTER';
export const SET_STYLES = 'SET_STYLES';

// ############## ACTIONS #################
export const setSelectedChapter = (chapter) => ({ type: SET_SELECTED_CHAPTER, chapter });
export const setStyles = (styles) => ({ type: SET_STYLES, styles });

export const closeProjectAction = () => {

	console.log("closeProjectAction");

	return (dispatch, getState) => {

		storage.get('storyteller', function (error, data) {
			if (error) throw error;

			if (data) {

				var new_data = Object.assign({}, data, {
					path: ''
				});

				storage.set('storyteller', new_data, (error) => {
					if (error) throw error;
					dispatch(appStateActions.setPath(""));
				});
			}
		});
	}
}

export const archive = () => {

	return (dispatch, getState) => {

		var date = new Date();
		var date_splitted = date.toISOString().split('T');
		var date_string = date_splitted[0].replace(/-/g, "") + "_" + date_splitted[1].substring(0, 8).replace(/:/g, "");

		var path = getState().appStateReducer.path;

		fs.copy(path + "/src", path + "/archive/" + date_string, (err) => {
			if (err) {
				return console.error(err);
			}
			console.log('done!');
		});
	};
}

export const deleteProject = (directoryPath) => {

	return (dispatch, getState) => {

		console.log("deleting project...", directoryPath);

		var rimraf = require("rimraf");
		rimraf(directoryPath, function () {
			console.log("done");
			dispatch(workspaceActions.loadProjects());
		});
	};
}