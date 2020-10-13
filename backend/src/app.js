const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const { PORT } = require('../config')
const authSchema = require('./Routes/auth')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// http:304
// 동적 요청에 대한 응답을ㄴ 보낼 때 etag 생성을 하지 않도록 설정
app.set("etag", false);

// 정적 요청에 대한 응답을 보낼 때 etag 생성을 하지 않도록 설정
const options = { etag: false };
app.use(express.static("public", options));

app.use('/', authSchema)

app.listen((port = PORT), () =>console.log(`server is runngin on http://localhost:${PORT}`))

