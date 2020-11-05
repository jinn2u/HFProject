import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import ShowStudentPresenter from './ShowStudentPresenter'
import {getStudent} from '../../Modules/classManagement/showStudents'


const ShowStudentContainer = ({history}) => {
  const dispatch = useDispatch();
  const {students, showStudent, selectedClass} = useSelector(state=> state.teaStudent, shallowEqual)


  useEffect(()=> {
    dispatch(getStudent("1-1"))
  },[dispatch,])

  console.log( showStudent)
  return (<ShowStudentPresenter students={students} showStudent={showStudent} selectedClass={selectedClass}/>)
}
export default ShowStudentContainer