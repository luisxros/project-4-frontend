const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use('/songs', createProxyMiddleware({
        target: "https://tune-it-up-api.herokuapp.com",
        changeOrigin: true
    }))
}