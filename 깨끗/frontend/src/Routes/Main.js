import React from 'react'
import {useSelector} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'


const typeText = {
  padding: ".375rem .75rem",
  borderRadius: ".25rem",
  fontSize: "0.8rem",
  lineHeight: "2.0",
  textDecoration: 'none',
  width:"40%",
  height:"100%",
  fontWeight: "600",
  letterSpacing: "0.02857em",
  textTransform: "uppercase",
  display: "block",
  boxSizing: "border-box",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "2px",
  paddingLeft: "16px",
  paddingRight: "16px",
  textAlign: "center",
}

const menuLayout = {
  borderRadius: ".25rem",
  width:"80%",
  height:"auto",
  display: "block",
  boxSizing: "border-box",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "15px",
}

const menuStyle = {
  color: "white",
  background: "#1976d2",
  borderRadius: ".25rem",
  padding: ".375rem .75rem",
  fontSize: "1rem",
  lineHeight: "2.0",
  textDecoration: 'none',
  width:"100%",
  height:"auto",
  fontWeight: "600",
  letterSpacing: "0.02857em",
  textTransform: "uppercase",
  display: "block",
  boxSizing: "border-box",
  marginTop: "8px",
  paddingLeft: "16px",
  paddingRight: "16px",
  textAlign: "center"
}


export default () => {  
  const {user_type} = useSelector(state => state.login)
  return (
    <>        
      {user_type==='student' && (
        <>
          <h1>학생입니다.</h1>
          <Link to='/showGrade'>성적 확인</Link>
        </>
      )}
      {user_type==='teacher' && (
        <>
          <h1>선생입니다.</h1>
          <Redirect to='/classmanagement'/>
        </>
      )}
    </>
  )
}