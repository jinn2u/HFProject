import { handleActions } from 'redux-actions'
import * as api from '../Utils/api'
import signupThunk from './thunk/signupThunk'

const GET_SIGNUP = 'signup/SIGNUP'
const GET_SIGNUP_SUCCESS = 'signup/SIGNUP_SUCCESS'
const GET_SIGNUP_FAILURE = 'signup/SIGNUP_FAILURE'

export const getSignup = signupThunk(GET_SIGNUP, api.getSignup)

const initialState = {
  isSignedUp: false,
  error: false,
}
const signup = handleActions(
  {
    [GET_SIGNUP_SUCCESS]: (state, action) => ({
      ...state,
      isSignedUp: action.payload.signup,
      error: false,
    }),
    [GET_SIGNUP_FAILURE]: (state, action) => ({
      ...state,
      isSignedUp: false,
      error: action.payload.error,
    }),
  },
  initialState
)
export default signup