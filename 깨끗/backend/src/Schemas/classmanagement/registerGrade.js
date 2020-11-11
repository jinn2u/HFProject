const jwt = require('jsonwebtoken')
const pool = require('../index')

const { secret } = require('../../../config')

module.exports = async (req, res) => {
  const {access_token} = req.headers
  const {data: tea_num} = await jwt.verify(access_token, secret)
  // const tea_num = "t2"
  const {tea_subject, sub_semester, students} = req.body
  console.log(req.body)
  try{
    const {mid, final, practice} = (await pool.query(`
    SELECT mid, final, practice 
    FROM subject 
    WHERE sub_name="${tea_subject}" AND sub_semester="${sub_semester}"`))[0][0]
    for(let i=0; i<students.length; i++){
      let sum = (parseFloat(students[i].mid)*mid*0.01+parseFloat(students[i].final)*final*0.01+parseFloat(students[i].practice)*practice*0.01).toFixed(2)
      await pool.query(`
      UPDATE ${tea_subject}
      SET mid="${students[i].mid}", final="${students[i].final}", practice="${students[i].practice}", sub_semester="${sub_semester}", sum="${sum}"
      WHERE tea_num="${tea_num}" AND stu_num="${students[i].stu_num}"`)
    }
    const grades = (await pool.query(`SELECT stu_num, mid, final, practice, sub_semester, sum FROM ${tea_subject} where tea_num="${tea_num}" order by sum desc`))[0]
    return res.status(200).json({"registerGrade":true, grades, error: false})
  } catch(error) {
    console.log(error)
    return res.status(400).json({error: "다시 성적을 등록하세요"})
  }
}