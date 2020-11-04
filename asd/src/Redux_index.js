import { combineReducers } from 'redux'

import loading from './Thunk_loading'
import showStudents from './Redux_showStudent'

const rootReducer = combineReducers({
  loading,
  showStudents
})
export default rootReducer