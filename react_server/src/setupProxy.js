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
  app.use(
    '/B090041/**',
    createProxyMiddleware({
      target: 'http://apis.data.go.kr',
      changeOrigin: true,
      timeout: TIMEOUT,
      onError: (err, req, res) => console.log(err),
    })
  );
};
//'https://www.ftclone.com:5000',
//'http://localhost:5001'
// nginx 에서는, 설정파일에 location - proxy_pass 항목 작성하여야 cors오류 없이 정상요청됨
