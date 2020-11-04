import React, { useCallback, useEffect } from 'react'
import ClassmanagementPresenter from './ClassmanagementPresenter'

import { useDispatch,useSelector, shallowEqual} from 'react-redux'
import {getClass} from '../../Modules/classManagement/showClass'
import {getStudents} from '../../Modules/classManagement/showStudents'

const ClassmanagementContainer = () => {
  const dispatch = useDispatch()  
  const {tea_class,tea_home} = useSelector((state)=>state.teaClasses)
  const {students} = useSelector((state)=> state.showStudents)
  console.log(students+"sibal")
  useEffect(()=> {
    dispatch(getClass())
  },[dispatch])

  const onBtnClick = e => {
      dispatch(getStudents("1-1"))
  }
  
  return (<ClassmanagementPresenter tea_class={tea_class} tea_home={tea_home} students={students} onBtnClick={onBtnClick} />)
}
export default ClassmanagementContainer