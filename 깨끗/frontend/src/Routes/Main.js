import React from 'react'
import {useSelector} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'


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