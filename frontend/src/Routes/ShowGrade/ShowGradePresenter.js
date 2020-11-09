import React from 'react'
const ShowGradePresenter = ({allGrade, stdGrade}) => (
  <>
    {stdGrade === false ? (
      <h1>sibal</h1>
    ):(
      <table border ="1">
        <thead>
          <td>과목명</td><td>중간점수</td><td>기말점수</td><td>수행점수</td><td>평균</td>
        </thead>
        <tbody>
          {allGrade.map((grade, i)=>
            <tr key={i}>
              <td>{grade.subject}</td><td>{grade.mid}</td><td>{grade.final}</td><td>{grade.practice}</td><td>{grade.sum}</td>
            </tr>)}

        </tbody>
      </table>
    )}
  </>
)
export default ShowGradePresenter