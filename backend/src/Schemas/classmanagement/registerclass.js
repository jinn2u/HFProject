const pool = require('../index')

module.exports = async (req, res) => {
  const {tea_class, tea_home} = req.body
  console.log(tea_class)
}