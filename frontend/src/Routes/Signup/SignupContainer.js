import React from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import SignupPresenter from './SignupPresenter'
import useInput from '../../Utils/utils/useInput'
import { getSignup } from '../../Modules/signup'

const SignupContainer = () => {
  const dispatch = useDispatch()
  const user_num = useInput('')
  const user_name = useInput('')
  const user_id = useInput('')
  const user_pwd = useInput('')

  const { isSignedUp, error } = useSelector(state => state.signup, shallowEqual)
  const onSubmit = e => {
    e.preventDefault()
    dispatch(getSignup( user_num.value, user_name.value, user_id.value, user_pwd.value))
    user_id.setValue('')
    user_pwd.setValue('')
    user_name.setValue('')
    user_num.setValue('')
  }

  return <SignupPresenter 
    onSubmit={onSubmit}
    isSignedUp={isSignedUp} 
    error={error} 
    user_num = {user_num}
    user_name = {user_name}
    user_id = {user_id} 
    user_pwd = {user_pwd}
  />
}
export default SignupContainer