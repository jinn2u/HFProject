import React from 'react'
import { Redirect } from 'react-router-dom'

const formStyle = {
  color: "white",
  background: "#1976d2",
  padding: ".375rem .75rem",
  borderRadius: ".25rem",
  fontSize: "1rem",
  lineHeight: 1.5,
  width:"80%",
  height:"auto",
  marginTop:"15px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "20%",
  paddingRight: "20%",
  display: "block",
  boxSizing: "border-box",
  letterSpacing: "0.02857em",
}

const infoBtn = {
  width:"80%",
  height:"auto",
  borderRadius: ".25rem",
  marginTop: "0.75rem",
  height: "2.5rem",
  border: "1px solid $oc-gray-5",
  borderRadius: "2px",
  outline: "none",
  fontSize: "1.5rem",
  padding: "0.25rem",
  background: "$oc-gray-5",
  color: "white",
  fontWeight: "600",
  flex: "1",
}

const inputStyle = {
  width:"100%",
  height:"20px",
  textAlign:"center",
  background:'white',
  borderRadius: ".25rem",
  fontSize: "1rem",
  lineHeight: "2.0",
  textDecoration: 'none',
}

const inputStyle2 = {
  width:"100%",
  height:"20px",
  textAlign:"center",
  background:'white',
  borderRadius: ".25rem",
  fontSize: "1rem",
  lineHeight: "2.0",
  textDecoration: 'none',
  marginTop:"5px",
}

const loginBtn = {
  /*
  width:"105%",
  height:"20px",
  textAlign:"center",
  background:"gray",
  */
 color: "black",
 background: "lightgray",
 borderRadius: ".25rem",
 fontSize: "1rem",
 lineHeight: "2.0",
 textDecoration: 'none',
 width:"100%",
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

const LoginPresenter = ({ user_num, user_pw, onSubmit, isLoggedIn, error }) => (
  <>
    {/* 로그인을 하지 않았을 경우 로그인 페이지가 나타난다 */}
    {!isLoggedIn && (
      <form onSubmit={onSubmit} style={formStyle} >
        <input style = {inputStyle} placeholder="num" value={user_num.value} onChange={user_num.onChange} />
        <input  style = {inputStyle2 } type="password" placeholder="pwd" value={user_pw.value} onChange={user_pw.onChange} />
        <button style = {loginBtn}> 로그인 하기</button>
        <div>{error &&<>{error}</>}</div>
    </form>
    )}
    {/* 로그인을 했다면 main으로 redirect */}
    {isLoggedIn && <Redirect to="/" />}
  </>
)
export default LoginPresenter