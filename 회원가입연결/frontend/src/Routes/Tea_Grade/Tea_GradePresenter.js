import React from 'react'

const Tea_GradePresenter = ({  
  showSubject, 
  inp_sub_semester,
  inp_mid,
  inp_final,
  inp_practice,
  onSubjSubmit,
  onRegValBtn,
  registerValue,
  chooseSubBtn,
  
}) => (
  <>
          <h3>--------------------------담당 교과 목록----------------------------------------------</h3>
        <button onClick={onRegValBtn}>성적 비율 등록하기</button>
        {registerValue === false ? (
          <></>
        ):(
          <>
            {showSubject === false ? (
              <></>
            ):(
              <>
                <h1>성적기준을 입력할 과목을 선택하세요: {chooseSubject}</h1>
                {subjects.map((subject, i)=> <button key ={i}  onClick={chooseSubBtn}value={subject}>{subject}</button>)}
                <form onSubmit={onSubjSubmit}>
                  <input placeholder="semester" value={inp_sub_semester.value} onChange={inp_sub_semester.onChange}/> 
                  <input placeholder="mid" value={inp_mid.value} onChange={inp_mid.onChange}/>
                  <input placeholder="final" value={inp_final.value} onChange={inp_final.onChange} /> 
                  <input placeholder="practice" value={inp_practice.value} onChange={inp_practice.onChange} />
                  <button>등록하기</button>
                </form>
              </>
            )}
          </>
        )}
  </>
)
export default Tea_GradePresenter