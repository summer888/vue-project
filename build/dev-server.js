require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()


var goodsArr = require('../mock/goodInfo.json');
var goods2Arr = require('../mock/goods2.json');
var goods3Arr = require('../mock/goods3.json');
var goods4Arr = require('../mock/goods4.json');
var goods5Arr = require('../mock/goods5.json');
var goods6Arr = require('../mock/goods6.json');
var goods7Arr = require('../mock/goods7.json');
var listArr = require('../mock/list.json');
var apiRouter = express.Router();

apiRouter.get('/goods',function(req,res){
  res.json({
    errno:0,
    data:goodsArr
  })
})
apiRouter.get('/list',function(req,res){
  res.json({
    errno:0,
    data:listArr
  })
})
apiRouter.get('/goods2',function(req,res){
  res.json({
    errno:0,
    data:goods2Arr
  })
})
apiRouter.get('/goods3',function(req,res){
  res.json({
    errno:0,
    data:goods3Arr
  })
})
apiRouter.get('/goods4',function(req,res){
  res.json({
    errno:0,
    data:goods4Arr
  })
})
apiRouter.get('/goods5',function(req,res){
  res.json({
    errno:0,
    data:goods5Arr
  })
})
apiRouter.get('/goods6',function(req,res){
  res.json({
    errno:0,
    data:goods6Arr
  })
})
apiRouter.get('/goods7',function(req,res){
  res.json({
    errno:0,
    data:goods7Arr
  })
})
app.use("/api",apiRouter)

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

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
