const jwt = require('jsonwebtoken')
const pool = require('../index')

const { secret } = require('../../../config')
const moment = require('moment-timezone');

module.exports = async (req, res) => {
  const {access_token} = req.headers
  const {data: tea_num} = await jwt.verify(access_token, secret)
  // const tea_num = "t2"
  try{
    const {tea_subject} = (await pool.query(`SELECT tea_subject FROM teacher where tea_num = "${tea_num}"`))[0][0]
    const subjects = tea_subject.replace(/\s/gi, "").split(',')
    return res.status(200).json({ "showSubject": true, subjects, error: false})
  } catch(error) {
    console.error(error)
    return res.status(400).send({ "showSubject": false, error: '다시 시도해 보세요'})
  }
}