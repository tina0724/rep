process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const { loadRouter } = require('./routes/index')
const { loadEnv } = require('./config/env')
const connectDB = require('./config/db')
const { errorConfig, notExistConfig } = require('./middlewares/error')
const httpHeader = require('./middlewares/httpHeader')
const loggerMiddleware = require('./middlewares/logger')
const translateNumber = require('./middlewares/translateNumber')
const checkToken = require('./middlewares/checkToken')
const sensitiveFilter = require('./middlewares/sensitiveFilter')
const xssFliter = require('./middlewares/xssFilter')
const { decryptRequest } = require('./middlewares/cryptoData')
const { loadScript } = require('./script')

const app = express()

loadEnv() // 加载env环境

connectDB() // 连接数据库

loadScript()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, './public')))

app.use('*', httpHeader)
app.options('*', (_, res) => res.sendStatus(200))

//app.use(decryptRequest) // 解密请求数据
app.use(checkToken)
app.use(sensitiveFilter)
app.use(xssFliter)
app.use(translateNumber) // get请求参数预处理(string转化number)
app.use(loggerMiddleware) // 日志打印
loadRouter(app) // 路由加载

app.use(errorConfig) // 404
app.use(notExistConfig) // 500



module.exports = app
