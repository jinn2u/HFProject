import { handleActions} from 'redux-actions'

import * as api from '../../Utils/api'

import threeParam from '../thunk/threeParam'

const GET_REGISTER_GRADE = 'class/REGISTER_GRADE'
const GET_REGISTER_GRADE_SUCCESS = 'class/REGISTER_GRADE_SUCCESS'
const GET_REGISTERSGRADE_FAILURE = 'class/REGISTER_GRADE_FAILURE'
export const getregisterGrade = threeParam(GET_REGISTER_GRADE, api.registerGrade)

const initialState = {
  registerGrade: false,
  grades: false,
  error: false,
}

const regGrade = handleActions(
  {
    [GET_REGISTER_GRADE_SUCCESS]: (state, action) => ({
      ...state,
      registerGrade: action.payload.registerGrade,
      grades: action.payload.grades,
      error: action.payload.error
    }),
    [GET_REGISTERSGRADE_FAILURE]: (state, action) => ({
      ...state,
      registerGrade: false,
      grades: false,
      error: action.payload.error
    })
  },
  initialState
)
export default regGrade