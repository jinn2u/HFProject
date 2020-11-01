import { handleActions} from 'redux-actions'

import * as api from '../../Utils/api'

import noParameterThunk from '../thunk/noParameterThunk'

const GET_CLASS = 'class/CLASS'
const GET_CLASS_SUCCESS = 'class/CLASS_SUCCESS'
const GET_CLASS_FAILURE = 'class/CLASS_FAILURE'
export const getClass = noParameterThunk(GET_CLASS, api.showClass)

const initialState = {
  showClass: false,
  tea_home: "0",
  tea_class:[],
  error: false,
}
const teaClasses = handleActions(
  {
    [GET_CLASS_SUCCESS]: (state, action) => ({
      ...state,
      showClass: action.payload.showClass,
      tea_home: action.payload.tea_home,
      tea_class: action.payload.tea_class,
      error: false
    }),
    [GET_CLASS_FAILURE]: (state, action) => ({
      showClass:action.payload.showClasse,
      tea_home: action.payload.tea_home,
      tea_class: action.payload.tea_class,
    })
  },
  initialState
)
export default teaClasses