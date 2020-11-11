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

const SignupPresenter = ({ user_num, user_name, user_pw, user_secret_key, onSubmit, isSignup, error }) => (
  <>
    {!isSignup && (
      <form style = {formStyle} onSubmit={onSubmit}>
        <input style = {inputStyle}  placeholder="사번을 입력하시오." value={user_num.value} onChange={user_num.onChange} required/>
        <input style = {inputStyle2 }placeholder="이름" value={user_name.value} onChange={user_name.onChange} required/>
        <input style = {inputStyle2 } placeholder="비밀번호를 입력하시오." value={user_pw.value} onChange={user_pw.onChange} required/>
        <input style = {inputStyle2 } placeholder="주민번호를 입력하시오." value={user_secret_key.value} onChange={user_secret_key.onChange} required/>
        {error && <>{error}</>}
        <button style = {loginBtn}>회원가입</button>
      </form>
    )}
    {isSignup && <Redirect to="/login" />}
  </>
)
export default SignupPresenter