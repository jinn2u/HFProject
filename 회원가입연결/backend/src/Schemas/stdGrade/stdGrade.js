const jwt = require('jsonwebtoken')
const pool = require('../index')

const { secret } = require('../../../config')

module.exports = async (req, res) => {
  const user_num = 's1'
  try{
    const a = (await pool.query(`select * from english1 where stu_num="${user_num}"`))[0][0]
    const b = (await pool.query(`select * from english2 where stu_num="${user_num}"`))[0][0]
    a.subject="english1", b.subject="english2"
    const allGrade = [a,b]
    return res.status(200).json({"stdGrade": true, allGrade, error: false})
  } catch(error) {
    console.log(error)
    return res.status(400).json({"modifyStatus": true, error: "출석정보를 다시 입력하세요."})
  }
}
