const express = require('express')

const attend = require('../Schemas/attend/status')
const onestdattend = require('../Schemas/attend/oneStdAttend')
const modifystatus = require('../Schemas/attend/modifyStatus')

const router = express.Router()


router.post('/showstudent',attend) // 담당반의 출석정보를 모두 보여준다.
router.post('/showattendinfo',onestdattend) //학생 한명의 출석정보를 모두 보여준다
router.post('/modifystatus',modifystatus) //학생 한명의 특정날의 출석정보를 변경한다.

module.exports = router