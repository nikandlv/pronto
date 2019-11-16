import { EDIT_CATEGORY_DIALOG } from "../Actions/types";
const initialState = {
    open: false
};

export default function EditCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case EDIT_CATEGORY_DIALOG.OPEN_EDIT_CATEGORY_DIALOG:
            return { open: true };
        case EDIT_CATEGORY_DIALOG.CLOSE_EDIT_CATEGORY_DIALOG:
            return { open: false };
    }
    return state;
}
