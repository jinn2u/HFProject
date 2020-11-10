const pool = require('../index')
const moment = require('moment-timezone');

module.exports = async (req, res) => {
  const {tea_class} = req.body
  moment.tz.setDefault("Asia/Seoul");
  var date = moment().format('YYYY');
  try{
    const students = (await pool.query(`SELECT * FROM \`${date+tea_class.replace('-','')}\``))[0]
    return res.status(200).json({ "showStudent": true, students, error: false})
  } catch(error) {
    console.error(error)
    return res.status(400).send({ "showStudent": false, error: '다시 시도해 보세요'})
  }
}