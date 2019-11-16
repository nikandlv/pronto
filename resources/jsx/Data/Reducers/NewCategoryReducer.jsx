import NEW_CATEGORY_DIALOG from "../Actions/types";
const initialState = {
    open: false
};

export default function NewCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case NEW_CATEGORY_DIALOG.OPEN_NEW_CATEGORY_DIALOG:
            return { open: true };
        case NEW_CATEGORY_DIALOG.CLOSE_NEW_CATEGORY_DIALOG:
            return { open: false };
    }
    return state;
}
