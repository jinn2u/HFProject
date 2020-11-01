import React from 'react'


const ClassmanagementPresenter = ({tea_class, tea_home, onBtnClick}) => (
  <>
    <h1>학급관리페이지 입니다.</h1>
    <h3>--------------------------담당 학급 목록----------------------------------------------</h3>
    {tea_home ===(null || undefined) && (
      <h1>담임학급이 없습니다</h1>
    )}
    {tea_home !== (null) && (
      <h1>담임학급: {tea_home}</h1>
    )}
    담당 학급 {tea_class.map((tea_clas, i) => 
    <h3 key = {i}>
        <button value={tea_clas} onClick={onBtnClick}>
            {tea_clas}
        </button>
        <br/>
    </h3>
    )}
  </> 
)
export default ClassmanagementPresenter