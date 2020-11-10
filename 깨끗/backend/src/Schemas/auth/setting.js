const bcrypt = require('bcrypt');

const pool = require('../index')
const { saltRounds } = require('../../../config')

module.exports = async (req, res) => {
  const {user_num, user_secret_key, user_type} = req.body
  const hash = await bcrypt.hash(user_secret_key, saltRounds)
  try{
    await pool.query(`
      INSERT INTO user(user_num, user_secret_key, user_type) 
      VALUES("${user_num}","${hash}","${user_type}")  
      `)
      if(user_type==='teacher'){
        await pool.query(`
        INSERT INTO teacher(tea_num)
        VALUES("${user_num}")
        `)
      } else if(user_type === 'student') {
        await pool.query(`
          INSERT INTO student(stu_num)
          VALUES("${user_num}")
        `)
      }
    return res.status(200).json({"setting": true, error: false})
  } catch (error) {
    console.error(error)
    return res.status(400).json({error:"다시 셋팅하세요."})
  }
}