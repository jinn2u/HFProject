const express = require('express')

const setting = require('../Schemas/auth/setting')
const signup = require('../schemas/auth/signup')
const signin = require('../schemas/auth/signin')
// const logout = require('../schemas/auth/logout')

const router = express.Router()

//관리자전용(프론트에서 보일필요없음)
router.post('/setting',setting) //학번(사번)과 주민등록번호를 암호화해서 데이터베이스에 저장한다. 학생/선생님 여부도 데이터베이스에 저장.

//사용자 전용(프론트에서 보여야됨)
router.post('/signup',signup) //회원가입
router.post('/signin',signin) //로그인
// router.post('/logout', logout)

module.exports = router