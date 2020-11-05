import { handleActions} from 'redux-actions'
import * as api from '../../Utils/api'
import oneParam from '../thunk/oneParam'

const GET_TEA_STUDENTS = 'class/TEA'
const GET_TEA_STUDENTS_SUCCESS = 'class/TEA_STUDENTS_SUCCESS'
const GET_TEA_STUDENTS_FAILURE = 'class/TEA_STUDENTS_FAILURE'
export const getStudent = oneParam(GET_TEA_STUDENTS, api.showStudents)

const initialState = {
  showStudent: false,
  students: false,
  selectedClass: false,
  error: false,
}

const teaStudent = handleActions(
  {
    [GET_TEA_STUDENTS_SUCCESS]: (state, action) => ({
      ...state,
      showStudent: action.payload.showStudent,
      students: action.payload.students,
      selectedClass: action.payload.selectedClass,
      error: action.payload.error
    }),
    [GET_TEA_STUDENTS_FAILURE]: (state, action) => ({
      ...state,
      showStudent: action.payload.showStudent,
      error: action.payload.error
    })
  },
  initialState
)
export default teaStudent