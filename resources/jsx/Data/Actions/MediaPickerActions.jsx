import { MEDIA_PICKER } from './types';

export const openMediapicker = onPick => (dispatch) => {
    dispatch({
        type: MEDIA_PICKER.OPEN_MEDIA_PICKER,
        onPick
    })
}
export const closeMediapicker = () => (dispatch) => {
    dispatch({
        type: MEDIA_PICKER.CLOSE_MEDIA_PICKER
    })
}
