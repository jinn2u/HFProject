const express = require('express')

const showGrade = require('../Schemas/stdGrade/stdGrade')


const router = express.Router()

router.post('', showGrade) //본인이 맡은 학급을 보여준다.


module.exports = router