import * as types from './types'

export const init = () => (dispatch) => {
  dispatch({
    type: types.AUTHENTICATION.INIT
  })
}

export const signIn = () => (dispatch) => {
  dispatch({
    type: types.AUTHENTICATION.SIGN_IN
  })
}

export const signOut = () => (dispatch) => {
  dispatch({
    type: types.AUTHENTICATION.SIGN_OUT
  })
}

export const signUp = () => (dispatch) => {
  dispatch({
    type: types.AUTHENTICATION.SIGN_UP
  })
}
