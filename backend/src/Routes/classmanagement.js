const express = require('express')

const registerclass = require('../Schemas/classmanagement/registerclass')


const router = express.Router()

router.get('/registerclass',registerclass) //회원가입

module.exports = router