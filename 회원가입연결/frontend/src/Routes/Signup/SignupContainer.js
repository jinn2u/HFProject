import React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import SignupPresenter from './SignupPresenter'
import useInput from '../../Utils/utils/useInput'
import { getIsSignup } from '../../Modules/signup'

const SignupContainer = () => {
  const dispatch = useDispatch()
  const user_num = useInput('')
  const user_name = useInput('')
  const user_pw = useInput('')
  const user_secret_key = useInput('')

  const { isSignup, error } = useSelector(state => state.signedUp, shallowEqual)
  const onSubmit = e => {
    e.preventDefault()
    dispatch(getIsSignup( user_num.value, user_name.value, user_pw.value, user_secret_key.value))
    user_num.setValue('')
    user_name.setValue('')
    user_pw.setValue('')
    user_secret_key.setValue('')
  }

  return <SignupPresenter 
    onSubmit={onSubmit}
    isSignup={isSignup} 
    error={error} 
    user_num = {user_num}
    user_name = {user_name}
    user_pw = {user_pw} 
    user_secret_key = {user_secret_key}
  />
}
export default SignupContainer