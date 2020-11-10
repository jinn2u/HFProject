import React, {useCallback, useEffect, useState } from 'react'
import { useDispatch,useSelector, shallowEqual} from 'react-redux'
import {getClass} from '../../Modules/classManagement/showClass'
import {getStudent} from '../../Modules/classManagement/showStudents'
import {getSubjects} from '../../Modules/classManagement/showSubjects'
import {getregisterStandard} from '../../Modules/classManagement/registerStandard'
import {getregisterGrade} from '../../Modules/classManagement/registerGrade'
import useInput from '../../Utils/utils/useInput'
import Tea_GradePresenter from './Tea_GradePresenter'

const Tea_GradeContainer = () => {
  const inp_sub_semester = useInput('')
  const inp_mid = useInput('')
  const inp_final = useInput('')
  const inp_practice = useInput('')  

  const [registerValue,setRegisterValue] = useState(false)
  const [chooseSubject, setChooseSubject] = useState('')
  const dispatch = useDispatch()  
  const { loading, showSubject} = useSelector(
    state => ({
      showSubject: state.teaSubjects.showSubject,
      loading: state.loading
    }),
    shallowEqual
  );
  useEffect(()=> {
    dispatch(getSubjects())
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

  return <Tea_GradePresenter 
  showSubject={showSubject}
  inp_sub_semester={inp_sub_semester}
  inp_mid={inp_mid}
  inp_final={inp_final}
  inp_practice={inp_practice}
  onSubjSubmit={onSubjSubmit}
  onRegValBtn={onRegValBtn}
  registerValue={registerValue}
  chooseSubBtn={chooseSubBtn}
  />
}
export default Tea_GradeContainer