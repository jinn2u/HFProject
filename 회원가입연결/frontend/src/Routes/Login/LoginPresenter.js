import React from 'react'
import { Redirect } from 'react-router-dom'
const LoginPresenter = ({ user_num, user_pw, onSubmit, isLoggedIn, error }) => (
  <>
    {/* 로그인을 하지 않았을 경우 로그인 페이지가 나타난다 */}
    {!isLoggedIn && (
      <form onSubmit={onSubmit}>
        <input placeholder="num" value={user_num.value} onChange={user_num.onChange} />
        <input placeholder="pwd" value={user_pw.value} onChange={user_pw.onChange} />
        <button> 로그인 하기</button>
        {error &&<>{error}</>}
      </form>
    )}
    {/* 로그인을 했다면 main으로 redirect */}
    {isLoggedIn && <Redirect to="/" />}
  </>
)
export default LoginPresenter