//기본모듈 - url

const http = require('http');
const url = require("url");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    //string -> object
    const parsed = url.parse(req.url, true);
    // ?key=value -> QueryString
    // console.log(parsed.query.year);
    // console.log(parsed.query.class);
    // console.log(parsed.query.name);

    const year = parsed.query.year;
    const cls = parsed.query.class;
    const name = parsed.query.name;

  res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    //3학년 3반 빙가멜입니다
//   res.end("%d학년 %d반 %s입니다",parsed.query.year,parsed.query.class,parsed.query.name);
    res.end(`${year}학년 ${cls}반 ${name}입니다. 안녕~`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});