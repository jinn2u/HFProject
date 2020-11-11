import { handleActions} from 'redux-actions'

import * as api from '../../Utils/api'

import fiveParam from '../thunk/fiveParam'

const GET_REGISTER_STANDARD = 'class/REGISTER_STANDARD'
const GET_REGISTER_STANDARD_SUCCESS = 'class/REGISTER_STANDARD_SUCCESS'
const GET_REGISTERS_TANDARD_FAILURE = 'class/REGISTER_STANDARD_FAILURE'
export const getregisterStandard = fiveParam(GET_REGISTER_STANDARD, api.registerStandard)

const initialState = {
  registerstandard: false,
  error: false,
}

const regStandard = handleActions(
  {
    [GET_REGISTER_STANDARD_SUCCESS]: (state, action) => ({
      ...state,
      registerstandard: action.payload.registerstandard,
      error: action.payload.error
    }),
    [GET_REGISTERS_TANDARD_FAILURE]: (state, action) => ({
      ...state,
      registerstandard: action.payload.registerstandard,
      error: action.payload.error
    })
  },
  initialState
)
export default regStandard