const jwt = require('jsonwebtoken')
const pool = require('../index')

const { secret } = require('../../../config')

module.exports = async (req, res) => {
  const {access_token} = req.headers
  const {data: user_num} = await jwt.verify(access_token, secret)
  // const user_num='t2'
  try{
    const {tea_home, tea_class: tea_classes} = (await pool.query(`SELECT tea_home, tea_class FROM teacher WHERE tea_num="${user_num}"`))[0][0]
    const tea_class = tea_classes.replace(/\s/gi, "").split(',')
    return res.status(200).send({ "showClass": true, tea_home, tea_class})
  } catch(error) {
    console.error(error)
    return res.status(400).send({ "showClass": false, error: '다시 시도해 보세요'})
  }
}