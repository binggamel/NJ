// 다른모듈을 불러 쓰자
// 모듈 사용하기
const myCalc = require("./3_module");

console.log(myCalc.add(2, 3)); // exports.add = (a,b) => {}
console.log(myCalc.sub(2, 3));