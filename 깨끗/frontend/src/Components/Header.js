import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

import { getLogout } from '../Modules/login'

//css
import loginimg from '../img/login.png';


const headerLayout = {
  width:"100%",
  height:"28%",
  marginTop:"15%",
}
const headerStyle = {
  color: "white",
  background: "#1976d2",
  padding: ".375rem .75rem",
  borderRadius: ".25rem",
  fontSize: "1rem",
  lineHeight: "2.0",
  textDecoration: 'none',
  width:"80%",
  height:"auto",
  fontWeight: "600",
  letterSpacing: "0.02857em",
  textTransform: "uppercase",
  display: "block",
  boxSizing: "border-box",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "3px",
  paddingLeft: "16px",
  paddingRight: "16px",
  textAlign: "center"
}

const welcome = {
  background: "#1976d2",
  padding: ".375rem .75rem",
  borderRadius: ".25rem",
  fontSize: "1.4rem",
  lineHeight: "2.0",
  textDecoration: 'none',
  width:"80%",
  height:"auto",
  fontWeight: "600",
  letterSpacing: "0.02857em",
  textTransform: "uppercase",
  display: "block",
  boxSizing: "border-box",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "15%",
  paddingLeft: "16px",
  paddingRight: "16px",
  textAlign: "center"
}

const logoutBtn = {
  color: "white",
  background: "#1976d2",
  padding: ".375rem .75rem",
  borderRadius: ".25rem",
  fontSize: "0.5rem",
  lineHeight: "2.0",
  textDecoration: 'none',
  width:"15%",
  height:"auto",
  fontWeight: "600",
  letterSpacing: "0.02857em",
  textTransform: "uppercase",
  display: "block",
  boxSizing: "border-box",
  marginLeft: "auto",
  marginRight: "10%",
  marginTop: "2px",
  paddingLeft: "16px",
  paddingRight: "16px",
  textAlign: "center",
  float:"right",
}
const logoStyle = {
  width:'30%',
  height:'auto',
  marginLeft:'35%',
  marginRight:'35%',
  textAlign:'center',
  marginBottom:'10px',
}

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
        <div style = {headerLayout}>
          <div width='100%' height='auto'>
            <img src ={ loginimg } style={logoStyle} />
          </div>
          <div>
            <Link to="/Login" style = {headerStyle}>Sign in</Link>
            <Link to="/signup"style = {headerStyle}>Sign Up</Link>
          </div>
        </div>
      ) : (
        <>
          {<h1 style = {welcome}>{user_name}님 환영합니다.</h1>}
          <Link to="/" style = {logoutBtn} onClick={onClick}>로그아웃</Link>
        </> 
      )}
    </>
  )
}