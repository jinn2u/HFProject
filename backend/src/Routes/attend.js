const express = require('express')

const attend = require('../Schemas/attend/status')


const router = express.Router()


router.post('',attend) //회원가입

module.exports = router