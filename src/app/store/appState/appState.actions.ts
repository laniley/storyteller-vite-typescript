import { storage } from './../../../utils/storage'

// ############## ACTION TYPES #################
export const SET_OBJECT_TO_DELETE = 'SET_OBJECT_TO_DELETE';
export const SET_PATH = 'SET_PATH';
export const SHOW_MOVE_TO_TRASH_ALERT = 'SHOW_MOVE_TO_TRASH_ALERT';
export const HIDE_MOVE_TO_TRASH_ALERT = 'HIDE_MOVE_TO_TRASH_ALERT';

// ############## ACTIONS #################
export const setObjectToDelete = (object_to_delete: any) => ({ type: SET_OBJECT_TO_DELETE, object_to_delete });
export const setPath = (path: string) => ({ type: SET_PATH, path });
export const showMoveToTrashAlert = (object_to_delete: any) => ({ type: SHOW_MOVE_TO_TRASH_ALERT, object_to_delete });
export const hideMoveToTrashAlert = () => ({ type: HIDE_MOVE_TO_TRASH_ALERT });

export const changeTheme = (theme: string) => {

	console.log(storage._current_content)

	var new_data = Object.assign({}, storage._current_content.data, {
		theme: theme
	});

	console.log(new_data)

	//return (dispatch, getState) => {

		/* storage.get('storyteller', function (error, data) {

			if (error) throw error;

			if (data) {

				var new_data = Object.assign({}, data, {
					theme: theme
				});

				storage.set('storyteller', new_data, (error) => {
					if (error) throw error;
					dispatch(setTheme(theme));
				});
			}
		}); */
	//}
}
