import { startLoading, finishLoading } from '../loading'

export default function oneParamThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`
  return (param1) => async (dispatch) => {
    // api.getUser
    dispatch({ type })
    dispatch(startLoading(type))
    try {
      const response = await request(param1)
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
      throw error.response;
    }
  }
}