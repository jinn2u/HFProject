import React from 'react'
import { Redirect } from 'react-router-dom'

const SignupPresenter = ({ user_num, user_name, user_id, user_pwd, onSubmit, isSignedUp, error }) => (
  <>
    {!isSignedUp && (
      <form onSubmit={onSubmit}>
        <input placeholder="사번을 입력하시오." value={user_num.value} onChange={user_num.onChange} required/>
        <input placeholder="이름" value={user_name.value} onChange={user_name.onChange} required/>
        <input placeholder="아이디를 입력하시오." value={user_id.value} onChange={user_id.onChange} required/>
        <input placeholder="비밀번호를 입력하시오." value={user_pwd.value} onChange={user_pwd.onChange} required/>
        {error && <>{error}</>}
        <button>확인</button>
      </form>
    )}
    {isSignedUp && <Redirect to="/login" />}
  </>
)
export default SignupPresenter