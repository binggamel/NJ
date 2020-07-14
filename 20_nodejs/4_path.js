//path : 파일의 경로를 다루는 모듈 기본 모듈
const path = require("path");

console.log(__dirname);
console.log(__filename);

// string -> object
const parsed = path.parse(__filename);
console.log(parsed);

console.log(parsed.dir);
console.log(parsed.base);

//확장모듈은 npm을 통해서 추가로 설치해야함

