import React from 'react'
import { Link } from 'react-router-dom'


const ClassmanagementPresenter = ({loading, tea_class, tea_home, students, showStudent, selectedClass, onBtnClick}) => ( 
  <>
    {loading === true ? (
      <h2>로딩중입니다.</h2>
      ):(
      <>
        <h1>학급관리페이지 입니다.</h1>
        <h3>--------------------------담당 학급 목록----------------------------------------------</h3>
        {tea_home === null ? (
          <h1>담임학급이 없습니다</h1>
        ) : (
          <>
            <h1>담임학급:{tea_home}</h1>
          </>
        )}
        {tea_class === false ? (
          <h6>로딩중입니다.</h6>
          ):(
            <>
              담당 학급:
              {tea_class.map((tea_clas, i)=> 
                <button key={i} onClick={onBtnClick} value={tea_clas}>{tea_clas}</button>
                  // <Link key={i} to={{pathname:"/classmanagement/showStudents", state: tea_clas}}>{tea_clas}</Link>
                  )}
            </>
        )}
        {showStudent === false ? (
          <></>
        ):(
          <table border="1">
            <tr><td>학번</td><td>이름</td></tr>
            {students.map((student, i) => 
              <tr key={i}>
                <td><button value={student.class_stu_num}>{student.class_stu_num}</button></td><td><button value={student.class_stu_name}>{student.class_stu_name}</button></td>
              </tr>
            )}
          </table>
        )}
      </>
    )}
  </> 
)
export default ClassmanagementPresenter