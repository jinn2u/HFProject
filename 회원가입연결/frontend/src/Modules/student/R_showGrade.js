import { handleActions} from 'redux-actions'

import * as api from '../../Utils/api'

import noParameter from '../thunk/noParameter'

const GET_ALLGRADE = 'student/ALLGRADE'
const GET_ALLGRADE_SUCCESS = 'student/ALLGRADE_SUCCESS'
const GET_ALLGRADE_FAILURE = 'student/ALLGRADE_FAILURE'

export const getAllGrade = noParameter(GET_ALLGRADE, api.showStdGrades)

const initialState = {
  stdGrade: false,
  allGrade: [],
  error: false,
}

const allStdGrade = handleActions(
  {
    [GET_ALLGRADE_SUCCESS]: (state, action) => ({
      ...state,
      stdGrade: action.payload.stdGrade,
      allGrade: action.payload.allGrade,
      error: action.payload.error
    }),
    [GET_ALLGRADE_FAILURE]: (state, action) => ({
      ...state,
      stdGrade: false,
      allGrade: false,
      error: action.payload.error
    })
  },
  initialState
)
export default allStdGrade