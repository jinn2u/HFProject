import { startLoading, finishLoading } from '../loading'

export default function loginThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`
  return ( user_num, user_name, user_id, user_pwd ) => async (dispatch) => {
    dispatch({ type })
    dispatch(startLoading(type))
    try {
      const response = await request( user_num, user_name, user_id, user_pwd )
      dispatch({
        type: SUCCESS,
        payload: response.data,
      })
      dispatch(finishLoading(type))
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: error.response.data,
      })
      dispatch(startLoading(type))
      throw error
    }
  }
}