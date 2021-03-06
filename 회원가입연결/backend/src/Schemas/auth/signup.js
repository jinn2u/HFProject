const bcrypt = require('bcrypt');

const pool = require('../index')
const { saltRounds } = require('../../../config')

module.exports = async (req, res) => {
  const {user_num, user_name, user_pw, user_secret_key: pushed_secret_key} = req.body
  console.log(user_num)
  try{
    const {user_secret_key} = (await pool.query(`
      SELECT user_secret_key
      FROM user
      WHERE user_num="${user_num}"
    `))[0][0]
    if(user_secret_key=="")
      return res.status(400).json({"isSignup": false, error: "이미 회원가입을 했습니다."})
    const exist_pw = await bcrypt.compare(pushed_secret_key, user_secret_key) //true || false
    console.log(exist_pw)
    if(!exist_pw)
      return res.status(400).json({"isSignup": false, error:"존재하지 않는 학번(사번)입니다."})
    else {
      const hash = await bcrypt.hash(user_pw, saltRounds)
      try{
        await pool.query(`
          UPDATE user
          SET user_name="${user_name}", user_pw="${hash}", user_secret_key=""
          WHERE user_num="${user_num}"
        `)
        return res.status(200).json({"isSignup":true, error: false})
      } catch(error) {
        console.error(error)
        return res.status(400).json({"isSignup": false, error:"다시 시도하세요."})
      }
    }
  } catch (error) {
    console.error(error)
    return res.status(400).json({"isSignup": false, error: "다시 회원가입 시도하세요."})
  }
}