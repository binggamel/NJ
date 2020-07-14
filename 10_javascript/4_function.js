function add(a,b) {
    return a + b;
}

console.log(add(2, 2));

//2m 익명함수
var add2 = function (a,b) {
    return a + b;
}

console.log(add2(2, 3));

//3m 함수정의 + 함수호출
var add3 = (function (a, b) {
    return a + b;
})(2, 3);
console.log(add3);

//4m arrow function 중요^^
var add4 = (a,b) => a + b;

var add5 = ((a, b) => a + b)(2, 3);
console.log(add5);