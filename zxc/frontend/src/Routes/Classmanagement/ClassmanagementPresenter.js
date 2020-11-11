import React from 'react'


const menuinfo = {
  padding: ".375rem .75rem",
  borderRadius: ".25rem",
  fontSize: "0.8rem",
  lineHeight: "2.0",
  textDecoration: 'none',
  width:"40%",
  height:"100%",
  fontWeight: "600",
  letterSpacing: "0.02857em",
  textTransform: "uppercase",
  display: "block",
  boxSizing: "border-box",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "2px",
  paddingLeft: "16px",
  paddingRight: "16px",
  textAlign: "center",
}

const homelistLayout = {
  background:"lightgray",
  borderRadius: ".25rem",
  width:"80%",
  height:"auto",
  display: "block",
  boxSizing: "border-box",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "10px",
}

const myclassLayout ={
  background:"lightgray",
  borderRadius: ".25rem",
  width:"80%",
  height:"auto",
  display: "block",
  boxSizing: "border-box",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop:"15px",
}

const mysubjectLayout ={
  background:"lightgray",
  borderRadius: ".25rem",
  width:"80%",
  height:"auto",
  display: "block",
  boxSizing: "border-box",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop:"15px",
}

const titleStyle = {
  color: "white",
  background: "#1976d2",
  borderRadius: ".25rem",
  padding: ".375rem .75rem",
  fontSize: "1rem",
  lineHeight: "2.0",
  textDecoration: 'none',
  width:"100%",
  height:"auto",
  fontWeight: "600",
  letterSpacing: "0.02857em",
  textTransform: "uppercase",
  display: "block",
  boxSizing: "border-box",
  marginTop: "3px",
  paddingLeft: "16px",
  paddingRight: "16px",
  textAlign: "center"
}

const ClassmanagementPresenter = ({
  loading, 
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
  onRegValBtn,
  registerValue,
  chooseSubBtn,
  chooseSubject,
  std_mid,
  std_final,
  std_practice,
  onInpGradeBtn,
  onInpGradeBtnValue,
  onGradeSubmit,
  chooseSemester,
  chooseSemBtn,
  chooseSemVal,
  registerGrade,
  grades
}) => ( 
  <>
  {loading === true ? (
    <h2>로딩중입니다.</h2>
    ):(
    <>
      <>
        <h1 style = {menuinfo}>학급관리페이지 입니다.    </h1>
      </>

      <div style = {homelistLayout}>
        <div>
          <h3 style = {titleStyle}>담당 학급 목록</h3>
        </div>
        <div>
          {tea_home === null ? (
            <h3>담임학급이 없습니다</h3>
          ) : (
            <>
              <h3>담임학급:{tea_home}</h3>
            </>
          )}
        </div>
      </div>

      <div style = {myclassLayout}>
        {tea_class === false ? (
          <h6>로딩중입니다.</h6>
          ):(
            <>
              <h3 style = {titleStyle}>담당 학급</h3>
              {tea_class.map((tea_clas, i)=> 
                <button key={i} onClick={onBtnClick} value={tea_clas}>{tea_clas}</button>
                  )}
            </>
        )}
        {showStudent === false ? (
          <></>
        ):(
          <>
            <h3>{selectedClass} 에 대한 학생들의 성적 입력하기</h3>
            <h3>과목을 선택하세요: {chooseSubject}</h3>
            <h1>학기를 선택하세요: {chooseSemVal}</h1>
            {subjects.map((subject, i)=> <button key ={i} onClick={chooseSubBtn}value={subject}>{subject}</button>)}
            {chooseSemester.map((semester, i)=> <button key ={i} onClick={chooseSemBtn}value={semester}>{semester}학기</button>)}
            <table border="1">
              <thead>
              <tr><td>이름</td><td>학번</td><td></td></tr>
              </thead>
              <tbody>
                {students.map((student, i) => 
                  <tr key={i}>
                    <td><input value={student.class_stu_name} placeholder={student.class_stu_name} readOnly /></td>
                    <td><input placeholder={student.class_stu_num} value={student.class_stu_num} readOnly/></td>
                    <td><button onClick={onInpGradeBtn}>선택하세요.</button></td>
                  </tr>
                )}
              </tbody>
            </table>
            {onInpGradeBtnValue === false ? (
              <></>
            ):(
              <form onSubmit={onGradeSubmit}>
                <input placeholder='중간고사' value={std_mid.value} onChange={std_mid.onChange} />
                <input placeholder='기말고사' value={std_final.value} onChange={std_final.onChange} />
                <input placeholder='수행평가' value={std_practice.value} onChange={std_practice.onChange} />
                <button>등록하기</button>
              </form>
            )}
            {registerGrade === false ? (
              <></>
            ):(
              <>
                <h1>--------------------------학생들의 성적-------------------------</h1>
                <table border="1">
                <thead><td>학번</td><td>중간점수</td><td>기말점수</td><td>수행점수</td><td>학기</td><td>평균</td></thead>
                <tbody>
                {grades.map((grade, i)=> 
                  <tr key={i}>
                    <td>{grade.stu_num}</td><td>{grade.mid}</td><td>{grade.final}</td><td>{grade.practice}</td><td>{grade.sub_semester}</td><td>{grade.sum}</td>
                  </tr>)}
                </tbody>
                </table>
              </>
            )}
          </>
        )}
      </div>
      <div style = {mysubjectLayout}>
        <div>
          <h3 style={titleStyle}>담당 교과 목록</h3>
        </div>

        <button onClick={onRegValBtn}>성적 비율 등록하기</button>
        {registerValue === false ? (
          <></>
        ):(
          <>
            {showSubject === false ? (
              <></>
            ):(
              <>
                <h3>성적비율을 입력할 과목을 선택하세요: {chooseSubject}</h3>
                {subjects.map((subject, i)=> <button key ={i}  onClick={chooseSubBtn}value={subject}>{subject}</button>)}
                <form onSubmit={onSubjSubmit}>
                  <input style ={{width:"100px"}}placeholder="semester" value={inp_sub_semester.value} onChange={inp_sub_semester.onChange}/> 
                  <input style ={{width:"100px"}} placeholder="mid" value={inp_mid.value} onChange={inp_mid.onChange}/>
                  <input style ={{width:"100px"}} placeholder="final" value={inp_final.value} onChange={inp_final.onChange} /> 
                  <input style ={{width:"100px"}} placeholder="practice" value={inp_practice.value} onChange={inp_practice.onChange} />
                  <button>등록하기</button>
                </form>
              </>
            )}
          </>
        )}
      </div>

    </>
  )}
</> 
)
export default ClassmanagementPresenter