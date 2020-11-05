import React, {useEffect } from 'react'
import ClassmanagementPresenter from './ClassmanagementPresenter'
import { useDispatch,useSelector, shallowEqual} from 'react-redux'
import {getClass} from '../../Modules/classManagement/showClass'

const ClassmanagementContainer = () => {
  const dispatch = useDispatch()  
  const { loading, tea_class,showClass, tea_home } = useSelector(
    state => ({
      showClass:state.teaClasses.showClass,
      tea_class: state.teaClasses.tea_class,
      tea_home: state.teaClasses.tea_home,
      loading: state.loading
    }),
    shallowEqual
  );
  console.log(showClass)
  useEffect(()=> {
    dispatch(getClass())
  },[dispatch])
  
  return (<ClassmanagementPresenter loaindg={loading} tea_class={tea_class} tea_home={tea_home}/>)
}
export default ClassmanagementContainer