import { NEW_CATEGORY_DIALOG, EDIT_CATEGORY_DIALOG } from "./types";

export const openNewCategoryDialog = () => dispatch => {
    dispatch({
        type: NEW_CATEGORY_DIALOG.OPEN_NEW_CATEGORY_DIALOG
    });
};

export const closeNewCategoryDialog = () => dispatch => {
    dispatch({
        type: NEW_CATEGORY_DIALOG.CLOSE_NEW_CATEGORY_DIALOG
    });
};

export const openEditCategoryDialog = () => dispatch => {
    dispatch({
        type: EDIT_CATEGORY_DIALOG.OPEN_EDIT_CATEGORY_DIALOG
    });
};

export const closeEditCategoryDialog = () => dispatch => {
    dispatch({
        type: EDIT_CATEGORY_DIALOG.CLOSE_EDIT_CATEGORY_DIALOG
    });
};
