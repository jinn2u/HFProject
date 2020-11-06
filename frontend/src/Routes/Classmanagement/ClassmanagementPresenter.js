import React from 'react'


const ClassmanagementPresenter = ({loading, 
  tea_class, 
  tea_home, 
  students, 
  showStudent, 
  selectedClass, 
  onBtnClick, 
  showSubject, 
  subjects, 
  inp_sub_semester,
  inp_mid,
  inp_final,
  inp_practice,
  onSubjSubmit,
}) => ( 
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
                  )}
            </>
        )}
        {showStudent === false ? (
          <></>
        ):(
          <>
            <h1>{selectedClass} 에 대한 학생들의 정보</h1>
            <table border="1">
              <thead>
              <tr><td>학번</td><td>이름</td></tr>
              </thead>
              <tbody>
                {students.map((student, i) => 
                  <tr key={i}>
                    <td><button value={student.class_stu_num}>{student.class_stu_num}</button></td><td><button value={student.class_stu_name}>{student.class_stu_name}</button></td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        )}
        <h3>--------------------------담당 교과 목록----------------------------------------------</h3>
        <h1>성적 비율 등록하기</h1>
        {showSubject === false ? (
          <></>
        ):(
          <>
            {subjects.map((subject, i)=> <button key ={i}  onClick={onSubjSubmit}value={subject}>{subject}</button>)}
            <input placeholder="semester" value={inp_sub_semester.value} onChange={inp_sub_semester.onChange}/> 
            <input placeholder="mid" value={inp_mid.value} onChange={inp_mid.onChange}/>
            <input placeholder="final" value={inp_final.value} onChange={inp_final.onChange} /> 
            <input placeholder="practice" value={inp_practice.value} onChange={inp_practice.onChange} />
          </>
        )}
      </>
    )}
  </> 
)
export default ClassmanagementPresenter