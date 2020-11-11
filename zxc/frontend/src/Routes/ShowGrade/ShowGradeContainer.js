import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import ShowGradePresenter from './ShowGradePresenter'
import {getAllGrade} from '../../Modules/student/R_showGrade'

const ShowGradeContainer = () => {
  const {allGrade, stdGrade} = useSelector(state=> state.allStdGrade, shallowEqual)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllGrade())
  },[dispatch])

  return (
    <ShowGradePresenter allGrade={allGrade} stdGrade={stdGrade} />
  )
}
export default ShowGradeContainer