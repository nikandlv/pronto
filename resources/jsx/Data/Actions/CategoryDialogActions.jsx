import { NEW_CATEGORY_DIALOG } from "./types";

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
