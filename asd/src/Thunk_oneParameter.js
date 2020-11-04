import { startLoading, finishLoading } from './Thunk_loading'

export default function oneParameterThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`
  return (oneParam) => async (dispatch) => {
    // api.getUser
    dispatch({ type })
    dispatch(startLoading(type))
    try {
      const response = await request(oneParam)
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