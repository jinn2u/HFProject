import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

import { getLogout } from '../Modules/login'

export default () => {
  const dispatch = useDispatch()
  const { isLoggedIn, user_name } = useSelector(state => state.login)
  const onClick = useCallback(() => {
    dispatch(getLogout())
    Cookies.remove("access_token")
    Cookies.remove("refresh_token")
    Cookies.remove("user_name")
    Cookies.remove("user_type")
  }, [dispatch])
  return (
    <>
      {!isLoggedIn ? (
        <>
          <Link to="/Login">로그인하기</Link>
          <Link to="/signup">회원가입하기</Link>
        </>
      ) : (
        <>
          {<h1>{user_name}님 환영합니다.</h1>}
          <Link to="/" onClick={onClick}>로그아웃</Link>
        </> 
      )}
    </>
  )
}