const bcrypt = require('bcrypt');

const pool = require('../index')
const { saltRounds } = require('../../../config')

module.exports = async (req, res) => {
  const {user_num, user_secret_key, user_type} = req.body
  const hash = await bcrypt.hash(user_secret_key, saltRounds)
  console.log(hash)
}