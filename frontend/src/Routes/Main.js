import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'


export default () => {  
  const {user_type} = useSelector(state => state.login)
  return (
    <>        
      {user_type==='student' && (
        <>
          <h1>학생입니다.</h1>
        </>
      )}
      {user_type==='teacher' && (
        <>
          <h1>선생입니다.</h1>
          <Link to='/classmanagement' >학급관리</Link>
        </>
      )}
    </>
  )
}