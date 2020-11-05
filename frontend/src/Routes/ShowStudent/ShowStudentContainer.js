import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShowStudentPresenter from './ShowStudentPresenter'
import {getStudent} from '../../Modules/classManagement/showStudents'


const ShowStudentContainer = ({history}) => {
  const dispatch = useDispatch();
  const {students, showStudent, selectedClass} = useSelector(state=> state.teaStudent)

  useEffect(()=> {
    dispatch(getStudent(history.location.state))
  },[ history.location.state])
  
  console.log(showStudent)

  return (<ShowStudentPresenter students={students} showStudent={showStudent} selectedClass={selectedClass}/>)
}
export default ShowStudentContainer