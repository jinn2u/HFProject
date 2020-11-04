const jwt = require('jsonwebtoken')
const pool = require('../index')

const { secret } = require('../../../config')

module.exports = async (req, res) => {
  // const {data: user_num} = await jwt.verify(access_token, secret)
  const user_num='t2'
  try{
    const {tea_home} = (await pool.query(`SELECT tea_home FROM teacher WHERE tea_num="${user_num}"`))[0][0]
    const [stu_num] = (await pool.query(`SELECT stu_num FROM student WHERE stu_grade="${tea_home[0]}" AND stu_class = "${tea_home[2]}"`))

    for (let i = 0; i<stu_num.length; i++){
      // console.log(stu_num[i].stu_num)
      const data = (await pool.query(`SELECT * FROM attend WHERE stu_num="${stu_num[i].stu_num}" order by att_date asc`))[0]
      console.log(data)
    }
    
    return res.status(200).json({stu_num}) 
  } catch(error) {
    console.log(error)
    return res.status(400).json({"조회":"실패"})
  }
}