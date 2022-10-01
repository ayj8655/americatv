const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        '/ayj',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );
}


//1. setupProxy 주석 -> npm start -> 연결이 안됨 -> 주석 해제 -> 로그인해서 값 확인 -> 504err -> 서버를 켰어 -> 됐음