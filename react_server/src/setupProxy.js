const { createProxyMiddleware } = require('http-proxy-middleware');

const TIMEOUT = 120 * 180 * 1000;

module.exports = function (app) {
  app.use(
    '/api/**',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      timeout: TIMEOUT,
      onError: (err, req, res) => console.log(err),
    })
  );
};
//'https://www.ftclone.com:5000',
//'http://localhost:5001'
