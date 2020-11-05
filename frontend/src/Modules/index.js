import { combineReducers } from 'redux'

import loading from './loading'
import login from './login'
import teaClasses from './classManagement/showClass'
import teaStudent from './classManagement/showStudents'

const rootReducer = combineReducers({
  loading,
  login,
  teaClasses,
  teaStudent
})
export default rootReducer