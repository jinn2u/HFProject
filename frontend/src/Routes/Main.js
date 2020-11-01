import React, { useCallback } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {getClass} from '../Modules/classManagement/showClass'

export default () => {  
  const {user_type} = useSelector(state => state.login)
  const dispatch = useDispatch()
  // const onLinkClick = useCallback(e=> {
  //   dispatch(getClass())
  // },[dispatch])
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