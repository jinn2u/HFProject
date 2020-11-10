const mysql = require('mysql2/promise')
const {SQLDB} = require('../../config')

const pool = mysql.createPool(
 SQLDB
)
module.exports = pool