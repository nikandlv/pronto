import { MEDIA_PICKER } from "../Actions/types";
const initialState = {
    open: false
};

export default function MediaPickerReducer(state = initialState, action) {
    switch (action.type) {
        case MEDIA_PICKER.OPEN_MEDIA_PICKER:
            return { open: true };
        case MEDIA_PICKER.CLOSE_MEDIA_PICKER:
            return { open: false };
    }
    return state;
}
