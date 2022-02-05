// Express 기본 모듈 불러오기
// express를 불러올 때는 http 모듈을 반드시 함께 불러와야 함.
var express = require('express');
var http = require('http');
const path = require('path');
var static = require('serve-static');

// express 객체 생성
var app = express();

// localhost:3000/images/daisy.png로 이미지 파일 접근 가능.
app.use(express.static(path.join(__dirname, 'src')));

// app.use()를 호출하여 미들웨어 등록
// app.use((req, res, next) => {
//   console.log('첫 번째 미들웨어에서 요청을 처리함');
  
//   req.user = {
//     name: 'minzi',
//     age: 33
//   };

//   req.query = {
//     name: 'queryName'
//   }

//   // 다음 미들웨어로
//   next();
// });

// app.use('/', (req, res, next) => {
//   console.log('두 번째 미들웨어에서 요청을 처리함');

//   req.paramName = req.query.name;

//   // 다음 미들웨어로
//   next();
// })

// app.use('/', (req, res, next) => {
//   console.log('세 번째 미들웨어에서 요청을 처리함');

//   res.writeHead(200, { 'Content-Type':'text/html;charset=utf8' });
//   res.write(`<div>userName: ${req.user.name}</div>`);
//   res.write(`<div>userAge: ${req.user.age}</div>`);
//   res.write(`<div>queryName: ${req.paramName}</div>`);
//   res.end();    // writeHeader, write 했던 내용들을 웹 페이지에 보냄
// })

http.createServer(app).listen(3000, () => {
  console.log('Express server가 3000번 포트에서 시작');
})