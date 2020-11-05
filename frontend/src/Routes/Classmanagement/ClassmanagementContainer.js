import React, {useCallback, useEffect } from 'react'
import ClassmanagementPresenter from './ClassmanagementPresenter'
import { useDispatch,useSelector, shallowEqual} from 'react-redux'
import {getClass} from '../../Modules/classManagement/showClass'
import {getStudent} from '../../Modules/classManagement/showStudents'

const ClassmanagementContainer = () => {
  const dispatch = useDispatch()  
  const { loading, tea_class, showClass, tea_home,  students, showStudent, selectedClass } = useSelector(
    state => ({
      showClass:state.teaClasses.showClass,
      tea_class: state.teaClasses.tea_class,
      tea_home: state.teaClasses.tea_home,
      showStudent: state.teaStudent.showStudent,
      students: state.teaStudent.students,
      showStudent: state.teaStudent.showStudent,
      selectedClass: state.teaStudent.selectedClass,
      loading: state.loading
    }),
    shallowEqual
  );
  useEffect(()=> {
    dispatch(getClass())
  },[dispatch])
  
  const onBtnClick = useCallback(e=> {
    dispatch(getStudent(e.target.value))
  },[dispatch])
  return (<ClassmanagementPresenter loaindg={loading} tea_class={tea_class} tea_home={tea_home} onBtnClick={onBtnClick} students={students} showStudent={showStudent} selectedClass={selectedClass}/>)
}
export default ClassmanagementContainer