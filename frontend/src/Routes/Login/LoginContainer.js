import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getLogin } from '../../Modules/login'

import LoginPresenter from './LoginPresenter'
import useInput from '../../Utils/utils/useInput'


const LoginContainer = () => {
  const user_num = useInput('')
  const user_pw = useInput('')
  const dispatch = useDispatch()
  const { isLoggedIn, error } = useSelector(state => state.login, shallowEqual)
  const onSubmit = e => {
    e.preventDefault()
    dispatch(getLogin(user_num.value, user_pw.value))
    user_num.setValue('')
    user_pw.setValue('')
  }
  return (
    <LoginPresenter
      user_num={user_num}
      user_pw={user_pw}
      onSubmit={onSubmit}
      isLoggedIn={isLoggedIn}
      error={error}
    />
  )
}
export default LoginContainer