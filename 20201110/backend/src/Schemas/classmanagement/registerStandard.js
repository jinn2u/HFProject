const jwt = require('jsonwebtoken')
const pool = require('../index')

const { secret } = require('../../../config')

module.exports = async (req, res) => {
  // const {access_token} = req.headers
  // const {data: sub_tea_num} = await jwt.verify(access_token, secret)

  const {tea_subject:sub_name, sub_semester, mid, final, practice} = req.body
  const sub_tea_num = "t2"
  try{
    await pool.query(`
    UPDATE subject 
    SET  sub_semester="${sub_semester}", mid="${mid}", final="${final}", practice="${practice}"
    WHERE sub_tea_num="${sub_tea_num}" AND sub_name="${sub_name}"`)
    return res.status(200).send({ "registerstandard": true, error: false})
  } catch(error) {
    console.error(error)
    return res.status(400).send({ "registerstandard": false, error: '다시 시도해 보세요'})
  }
}