import { handleActions } from 'redux-actions'
import * as api from '../Utils/api'
import fourParam from './thunk/fourParam'

const GET_SIGNUP = 'signup/SIGNUP'
const GET_SIGNUP_SUCCESS = 'signup/SIGNUP_SUCCESS'
const GET_SIGNUP_FAILURE = 'signup/SIGNUP_FAILURE'

export const getIsSignup = fourParam(GET_SIGNUP, api.getSignup)

const initialState = {
  isSignup: false,
  error: false,
}
const signedUp = handleActions(
  {
    [GET_SIGNUP_SUCCESS]: (state, action) => ({
      ...state,
      isSignup: action.payload.isSignup,
      error: action.payload.error,
    }),
    [GET_SIGNUP_FAILURE]: (state, action) => ({
      ...state,
      isSignup: action.payload.isSignup,
      error: action.payload.error,
    }),
  },
  initialState
)
export default signedUp