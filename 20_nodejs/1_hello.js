// node.js 란?
// 웹 어플리케이션 = 프론트엔드 + 백엔드
// 프론트엔드 : HTML + CSS + JavaScript

// Node.js의 특징
// 1. 크롬 V8 엔진 : 브라우저 밖으로 나옴
// 2. 이벤트 기반의 비동기 방식 I/O 프레임워크
// 3. 모듈 기반 시스템 : 파일 형태로 구분

//REPL
//콘솔에 출력
//웹서버에 출력

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// 요청(request), 응답(response)
// Header + body
// 127.0.0.1:3000 -> text/plain 'Hello World'
// 127.0.0.1:3000/html -> <h1>Hello World<h1>
// 127.0.0.1:3000/json -> {msg : hello, world}
const server = http.createServer((req, res) => {
  console.log(req.url); // /
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  } else if (req.url === "/html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<body><h1>Hello, World</h1></body>");
    res.write("</html>");
    res.end();
  } else if (req.url === "/json") {
    const data = { msg: "Hello, world" };
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data)); // json object -> string
  } else {
    // 404(NOT FOUND), Not found 출력  (plain, html, json)
    res.end('404(Not found)');
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});