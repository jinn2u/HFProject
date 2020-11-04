const express = require('express')

const showClass = require('../Schemas/classmanagement/showClass')
const showStudents = require('../Schemas/classmanagement/showStudents')

const router = express.Router()

router.post('/showClass', showClass) //본인이 맡은 학급을 보여준다.
router.post('/showStudents', showStudents)
module.exports = router