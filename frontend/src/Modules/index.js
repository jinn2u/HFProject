import { combineReducers } from 'redux'

import loading from './loading'
import login from './login'
import teaClasses from './classManagement/showClass'
import teaStudent from './classManagement/showStudents'
import teaSubjects from './classManagement/showSubjects'
import regStandard from './classManagement/registerStandard'
import regGrade from './classManagement/registerGrade'
import allStdGrade from './student/R_showGrade'

const rootReducer = combineReducers({
  loading,
  login,
  teaClasses,
  teaStudent,
  teaSubjects,
  regStandard,
  regGrade,
  allStdGrade
})
export default rootReducer