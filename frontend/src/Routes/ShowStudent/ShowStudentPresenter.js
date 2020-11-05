import React from 'react'


const ShowStudentPresenter = ({students, showStudent,selectedClass}) => (
  <>
    {showStudent ==='false' ? (
      <>
        로딩중입니다.
      </>
    ):(
      <>
        {selectedClass}
      </>
    )}
  </> 
)
export default ShowStudentPresenter