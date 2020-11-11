const express = require('express')

const showClass = require('../Schemas/classmanagement/showClass')
const showStudents = require('../Schemas/classmanagement/showStudents')
const registerstandard = require('../Schemas/classmanagement/registerStandard')
const showsubject = require('../Schemas/classmanagement/showSubject')
const registergrade = require('../Schemas/classmanagement/registerGrade')

const router = express.Router()

router.post('/showClass', showClass) //본인이 맡은 학급을 보여준다.
router.post('/showstudents', showStudents) //본인이 맡은 학급을 보여준다.
router.post('/showsubject', showsubject) //선생님이 담당하고 있는 과목들을 보여준다.
router.post('/registerstandard', registerstandard) //선생님이 담당하는 과목에 대한 점수비율을 등록한다.
router.post('/registergrade',registergrade) //학생들의 성적을 등록한다.

module.exports = router