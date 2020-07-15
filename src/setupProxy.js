const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      '/tengxun',
      createProxyMiddleware({
        target: 'http://192.144.172.197:8081',
        changeOrigin: true,
        secure:false
      })
    );
  };
