//var(함수레벨 스코프) -> let(블록레벨 스코프)

let a = 1;
const PI = 3.14;

//템플릿 문자열
let n1 = "펭", n2 = "수";
let name = "My name is " + n1 + n2 + ".";
console.log(name);

let name2 = `My name is ${n1} ${n2}.`;
console.log(name2)




function add(a, b) {
    return a + b;
}




let add2 = (a, b) => a + b;
console.log(add2(2, 3));

let add3 = ((a, b) => a + b)(2, 3);
console.log(add3); //5