import { handleActions} from 'redux-actions'

import * as api from '../../Utils/api'

import noParameter from '../thunk/noParameter'

const GET_SUBJECT = 'class/SUBJECT'
const GET_SUBJECT_SUCCESS = 'class/SUBJECT_SUCCESS'
const GET_SUBJECT_FAILURE = 'class/SUBJECT_FAILURE'
export const getSubjects = noParameter(GET_SUBJECT, api.showSubjects)

const initialState = {
  showSubject: false,
  subjects: false,
  error: false
}

const teaSubjects = handleActions(
  {
    [GET_SUBJECT_SUCCESS]: (state, action) => ({
      ...state,
      showSubject: action.payload.showSubject,
      subjects: action.payload.subjects,
      error: action.payload.error
    }),
    [GET_SUBJECT_FAILURE]: (state, action) => ({
      ...state,
      showSubject: action.payload.showSubject,
      error: action.payload.error
    })
  },
  initialState
)
export default teaSubjects