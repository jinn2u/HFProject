const jwt = require('jsonwebtoken')
const randtoken = require('rand-token')
const bcrypt = require('bcrypt')

const pool = require('../index')
const { secret } = require('../../../config')

module.exports = async (req, res) => {
  const {user_num, user_pw: pushedpw } = req.body
  try{
    const {user_pw, user_name, user_type} = (await pool.query(`SELECT user_pw, user_name, user_type FROM user WHERE user_num="${user_num}"`))[0][0]
    const exist_pw = await bcrypt.compare(pushedpw, user_pw)
    if (!exist_pw)
      return res.status(400).json({ "login": false, "error": "잘못된 비밀번호 입니다." })
    //토큰 생성
    const access_token = jwt.sign({ data: user_num }, secret, { expiresIn: '24h' })
    const RefreshToken = randtoken.generate(16)
    // //refresh token update
    await pool.query(`UPDATE user SET user_refresh_token = "${RefreshToken}" where user_num="${user_num}"`)
    const refresh_token = jwt.sign({ data: RefreshToken }, secret, { expiresIn: '1d' })
    return res.status(200).send({ "login": true, "refresh_token": refresh_token, "access_token": access_token, user_name, user_type, error: false}) 
  } catch (error) {
    console.error(error)
    return res.status(400).json({ "login": false, error: "존재하지 않는 사번/학번 입니다." })
  }  
}