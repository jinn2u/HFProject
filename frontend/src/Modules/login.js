import { handleActions, createAction} from 'redux-actions'
import Cookies from 'js-cookie'
import * as api from '../Utils/api'
import loginThunk from './thunk/loginThunk'
import noParameterThunk from './thunk/noParameterThunk'

const GET_LOGIN = 'login/LOGIN'
const GET_LOGIN_SUCCESS = 'login/LOGIN_SUCCESS'
const GET_LOGIN_FAILURE = 'login/LOGIN_FAILURE'
const MAINTAIN_LGOIN = 'login/MAINTAIN'
const GET_LOGOUT = 'login/LOGOUT'

export const maintain_login = createAction(MAINTAIN_LGOIN)

export const getLogin = loginThunk(GET_LOGIN, api.getLogin)
export const getLogout = noParameterThunk(GET_LOGOUT, api.getLogout)

const initialState = {
  isLoggedIn: false,
  user_type: '',
  user_name: '',
  error: false,
}
const login = handleActions(
  {
    [GET_LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      isLoggedIn: action.payload.login,
      user_type: action.payload.user_type,
      user_name: action.payload.user_name,
      error: false
    }),
    [GET_LOGIN_FAILURE]: (state, action) => ({
      ...state,
      isLoggedIn: action.payload.login,
      error: action.payload.error
    }),
    [GET_LOGOUT]: (state) => ({
      ...state,
      isLoggedIn: false,
      user_type: '',
      user_name:'',
      error: false
    }),
    [MAINTAIN_LGOIN]: (state) => ({
      ...state,
      isLoggedIn: true,
      user_type: Cookies.get("user_type"),
      user_name: Cookies.get("user_name"),
      error: false
    })
  },
  initialState
)
export default login