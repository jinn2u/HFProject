import React, { useCallback, useEffect } from 'react'
import ClassmanagementPresenter from './ClassmanagementPresenter'

import { useDispatch,useSelector, shallowEqual} from 'react-redux'
import {getClass} from '../../Modules/classManagement/showClass'
import {getStudents} from '../../Modules/classManagement/showStudents'

const ClassmanagementContainer = () => {
  const dispatch = useDispatch()  
  const {tea_class,tea_home} = useSelector((state)=>state.teaClasses)
  useEffect(()=> {
    dispatch(getClass())
  },[dispatch])
  
  console.log(tea_home ,tea_class+" 렌더링시 반의 값")

  const onBtnClick = useCallback(e => {
      e.preventDefault()
      console.log(e.target+ "버튼 밸류")
      const pickClass = e.target.value
      console.log(pickClass+"선택한 값")
      dispatch(getStudents(pickClass))
    },[dispatch]
  )
  
  return (<ClassmanagementPresenter tea_class={tea_class} tea_home={tea_home} onBtnClick={onBtnClick} />)
}
export default ClassmanagementContainer