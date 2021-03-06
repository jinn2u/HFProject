import React, {useCallback, useEffect, useState } from 'react'
import ClassmanagementPresenter from './ClassmanagementPresenter'
import { useDispatch,useSelector, shallowEqual} from 'react-redux'
import {getClass} from '../../Modules/classManagement/showClass'
import {getStudent} from '../../Modules/classManagement/showStudents'
import {getSubjects} from '../../Modules/classManagement/showSubjects'
import {getregisterStandard} from '../../Modules/classManagement/registerStandard'
import {getregisterGrade} from '../../Modules/classManagement/registerGrade'
import useInput from '../../Utils/utils/useInput'

const ClassmanagementContainer = () => {
  const inp_sub_semester = useInput('')
  const inp_mid = useInput('')
  const inp_final = useInput('')
  const inp_practice = useInput('')  

  const std_mid = useInput('')
  const std_final = useInput('')
  const std_practice = useInput('')

  const [registerValue,setRegisterValue] = useState(false)
  const [chooseSubject, setChooseSubject] = useState('')
  const [onInpGradeBtnValue, setOnInpGradeBtnValue] = useState(false)
  const chooseSemester = ['1','2']
  const [chooseSemVal, setChooseSemVal] = useState('')
  const [stdNumVal, setStdNumVal] = useState('')
  const dispatch = useDispatch()  
  const { loading, tea_class, tea_home,  students, showStudent, selectedClass, showSubject, subjects,registerGrade, grades } = useSelector(
    state => ({
      showClass:state.teaClasses.showClass,
      tea_class: state.teaClasses.tea_class,
      tea_home: state.teaClasses.tea_home,
      showStudent: state.teaStudent.showStudent,
      students: state.teaStudent.students,
      selectedClass: state.teaStudent.selectedClass,
      showSubject: state.teaSubjects.showSubject,
      subjects: state.teaSubjects.subjects,
      registerGrade: state.regGrade.registerGrade,
      grades: state.regGrade.grades,
      loading: state.loading
    }),
    shallowEqual
  );
  useEffect(()=> {
    dispatch(getClass())
    dispatch(getSubjects())
  },[dispatch])
  
  const onBtnClick = useCallback(e=> {
    dispatch(getStudent(e.target.value))
  },[dispatch])

  const onSubjSubmit = e =>{
    e.preventDefault()
    dispatch(getregisterStandard(chooseSubject, inp_sub_semester.value, inp_mid.value, inp_final.value, inp_practice.value))
    inp_sub_semester.setValue('')
    inp_mid.setValue('')
    inp_final.setValue('')
    inp_practice.setValue('')
  }

  const onRegValBtn = useCallback(() => {
    if(registerValue===false)
      setRegisterValue(true)
    else  
      setRegisterValue(false)
  },[registerValue])

  const chooseSubBtn = useCallback((e)=>{
    setChooseSubject(e.target.value)
  },[chooseSubject])

  const onInpGradeBtn = e => {
    onInpGradeBtnValue === true ? setOnInpGradeBtnValue(false) : setOnInpGradeBtnValue(true)   
    setStdNumVal(e.target.value)
  }
  const onGradeSubmit = e => {
    e.preventDefault()
    const students = [{
      stu_num: stdNumVal,
      mid: std_mid.value,
      final: std_final.value,
      practice: std_practice.value 
    }]
    dispatch(getregisterGrade(chooseSubject, chooseSemVal, students))
    std_mid.setValue('')
    std_final.setValue('')
    std_practice.setValue('')
  }
  const chooseSemBtn = e => {
    setChooseSemVal(e.target.value)
  } 
  return (<ClassmanagementPresenter 
    loaindg={loading} 
    tea_class={tea_class} 
    tea_home={tea_home} 
    onBtnClick={onBtnClick} 
    students={students} 
    showStudent={showStudent} 
    selectedClass={selectedClass}
    showSubject={showSubject}
    subjects={subjects}
    inp_sub_semester={inp_sub_semester}
    inp_mid={inp_mid}
    inp_final={inp_final}
    inp_practice={inp_practice}
    onSubjSubmit={onSubjSubmit}
    onRegValBtn={onRegValBtn}
    registerValue={registerValue}
    chooseSubBtn={chooseSubBtn}
    chooseSubject={chooseSubject}
    std_final={std_final}
    std_mid={std_mid}
    std_practice={std_practice}
    onInpGradeBtn={onInpGradeBtn}
    onInpGradeBtnValue={onInpGradeBtnValue}
    onGradeSubmit={onGradeSubmit}
    chooseSemester={chooseSemester}
    chooseSemBtn={chooseSemBtn}
    chooseSemVal={chooseSemVal}
    registerGrade={registerGrade}
    grades={grades}
  />)
}
export default ClassmanagementContainer