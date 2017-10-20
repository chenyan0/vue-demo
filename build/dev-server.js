require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var mockjs = require('mockjs')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

var appData = require('../db.json')//引入文件
var home = appData.home//json数据模块
var getNewsList = appData.getNewsList//数据模块
var createOrder = appData.createOrder//数据模块
var checkOrder = appData.checkOrder//数据模块
var getPrice = appData.getPrice//数据模块
var apiRouters = express.Router()//定义router
apiRouters.get('/home',function (req, res) {
  res.json({
     errno: 0,//返回值为json格式，效验码编程时方便判断返回状态
     data: home
  });
})
apiRouters.get('/getNewsList',function (req, res) {
  res.json({
    errno: 0,
    data: getNewsList
  })
})
apiRouters.post('/createOrder',function (req, res) {
  res.json({
    errno: 0,
    data: createOrder
  })
})
apiRouters.post('/checkOrder',function (req, res) {
  res.json({
    errno: 0,
    data: checkOrder
  })
})
apiRouters.post('/getPrice',function (req, res) {
  res.json({
    errno: 0,
    data: getPrice
  })
})
app.use('/api', apiRouters)//域名下的访问路径
// app.use('/mock',express.static('../mock'))
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
