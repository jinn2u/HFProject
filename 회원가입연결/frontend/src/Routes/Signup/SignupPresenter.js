import React from 'react'
import { Redirect } from 'react-router-dom'

const SignupPresenter = ({ user_num, user_name, user_pw, user_secret_key, onSubmit, isSignup, error }) => (
  <>
    {!isSignup && (
      <form onSubmit={onSubmit}>
        <input placeholder="사번을 입력하시오." value={user_num.value} onChange={user_num.onChange} required/>
        <input placeholder="이름" value={user_name.value} onChange={user_name.onChange} required/>
        <input placeholder="비밀번호를 입력하시오." value={user_pw.value} onChange={user_pw.onChange} required/>
        <input placeholder="주민번호를 입력하시오." value={user_secret_key.value} onChange={user_secret_key.onChange} required/>
        {error && <>{error}</>}
        <button>확인</button>
      </form>
    )}
    {isSignup && <Redirect to="/login" />}
  </>
)
export default SignupPresenter