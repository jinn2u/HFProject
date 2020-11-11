const jwt = require('jsonwebtoken')
const pool = require('../index')

const { secret } = require('../../../config')

module.exports = async (req, res) => {
  const {stu_num} = req.body
  try{
    const data = (await pool.query(`select stu_num, att_status, att_date from attend where stu_num="${stu_num}" ORDER BY att_status desc`))[0]
    console.log(data)
    return res.status(200).json({"oneStdAttend": true, data, error: false})

  } catch(error) {
    console.log(error)
    return res.status(400).json({"oneStdAttend": false, error: "조회에 실패하였습니다."})
  }
}