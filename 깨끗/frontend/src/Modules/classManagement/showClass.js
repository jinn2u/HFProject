import { handleActions} from 'redux-actions'

import * as api from '../../Utils/api'

import noParameter from '../thunk/noParameter'

const GET_CLASS = 'class/CLASS'
const GET_CLASS_SUCCESS = 'class/CLASS_SUCCESS'
const GET_CLASS_FAILURE = 'class/CLASS_FAILURE'
export const getClass = noParameter(GET_CLASS, api.showClass)

const initialState = {
  showClass: false,
  tea_home: false,
  tea_class: false,
  error: false,
}

const teaClasses = handleActions(
  {
    [GET_CLASS_SUCCESS]: (state, action) => ({
      ...state,
      showClass: action.payload.showClass,
      tea_home: action.payload.tea_home,
      tea_class: action.payload.tea_class,
      error: action.payload.error
    }),
    [GET_CLASS_FAILURE]: (state, action) => ({
      ...state,
      showClass: action.payload.showClass,
      error: action.payload.error
    })
  },
  initialState
)
export default teaClasses