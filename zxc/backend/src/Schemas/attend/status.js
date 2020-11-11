const jwt = require('jsonwebtoken')
const pool = require('../index')

const { secret } = require('../../../config')

module.exports = async (req, res) => {
  // const {access_token} = req.headers
  // const {data: user_num} = await jwt.verify(access_token, secret)
  const user_num='t2'
  try{
    const {tea_home} = (await pool.query(`SELECT tea_home FROM teacher WHERE tea_num="${user_num}"`))[0][0]
    const data= (await pool.query(`
    select a.stu_num, a.att_status, a.att_date 
    from (select stu_num from student where stu_class = "${tea_home[0]}" and stu_grade = "${tea_home[2]}") as s join attend as a on s.stu_num = a.stu_num
    order by a.att_date asc, a.stu_num asc`))[0]
    // console.log(data)
    return res.status(200).json({"status": true, data, error:false})
  } catch(error) {
    console.log(error)
    return res.status(400).json({"status": false, error: "다시 조회하세요"})
  }
}