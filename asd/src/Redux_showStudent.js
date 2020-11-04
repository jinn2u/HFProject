import { handleActions} from 'redux-actions'
import * as api from './api'
import oneParameterThunk from './Thunk_oneParameter'

const GET_CLASS = 'GET_CLASS'
const GET_CLASS_SUCCESS = 'showStudents/CLASS_SUCCESS'
const GET_CLASS_FAILURE = 'showStudents/CLASS_FAILURE'

export const getStudents = oneParameterThunk(GET_CLASS, api.showStudents)

const initialState = {
  showStudent: false,
  students: [],
  error: false,
}
const showStudents = handleActions(
  {
    [GET_CLASS_SUCCESS]: (state, action) => ({
      ...state,
      showStudent: action.payload.showStudent,
      students: action.payload.students,
      error: false
    }),
    [GET_CLASS_FAILURE]: (state, action) => ({
      ...state,
      isLoggedIn: action.payload.login,
      error: action.payload.error
    }),
  },
  initialState
)
export default showStudents