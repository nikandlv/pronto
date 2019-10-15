import * as types from './types'

export const toggleTheme = () => (dispatch) => {
    dispatch({
        type: types.APPLICATION.TOGGLE_THEME
    })
}

export const setLanguage = (code) => (dispatch) => {
    dispatch({
        type: types.APPLICATION.SET_LANGUAGE,
        payload: code
    })
}

export const setSearch = (query) => (dispatch) => {
    dispatch({
        type:types.APPLICATION.SET_SEARCH,
        payload: query
    })
}

export const setTag = (tag) => (dispatch) => {
    dispatch({
        type:types.APPLICATION.SET_TAG,
        payload: tag
    })
}

export const setCategory = (id,title) => (dispatch) => {
    dispatch({
        type:types.APPLICATION.SET_CATEGORY,
        payload: {id,title}
    })
}