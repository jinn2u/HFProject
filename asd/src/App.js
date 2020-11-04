import React from 'react'
import { useDispatch } from 'react-redux'
import {getStudents} from './Redux_showStudent'
const App = ()=> {
  const dispatch = useDispatch()
  const onBtnClick = e => {
    console.log(e.target.value+"sibal")
    dispatch(getStudents(String("1-1")))
  }
  return (
    <div className="App">
      <h1>"sibal"</h1>
      <button value ={"1-1"} onClick={onBtnClick}>"1-1"</button>
    </div>
  );
}

export default App;
