const jwt = require('jsonwebtoken')
const pool = require('../index')

const { secret } = require('../../../config')

module.exports = async (req, res) => {
  const {stu_num, att_status, att_date} = req.body
  try{
    await pool.query(`UPDATE attend set att_status="${att_status}" where stu_num="${stu_num}" and att_date= "${att_date}" `)
    const data = (await pool.query(`SELECT stu_num, att_status, att_date from attend where stu_num="${stu_num}" ORDER BY att_date asc`))[0]
    return res.status(200).json({"modifyStatus": true, data, error:false})
  } catch(error) {
    console.log(error)
    return res.status(400).json({"modifyStatus": true, error: "출석정보를 다시 입력하세요."})
  }
}