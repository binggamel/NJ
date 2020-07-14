var a = 1;
var b = 2;

var 민수미출튀 = "헤어밴드를 찾아서";

console.log("%s", 민수미출튀);
console.log(typeof a); 
console.log(typeof 민수미출튀);
console.log(typeof {});

//변수 hoisting 밑에서 위를 끌어올린다
function foo() {
    console.log(a); //undefined error ㄴㄴ 
    var a = 10;
    console.log(a);
}

foo();


//ES6(2015) : let, const 추가
function foo2() {
    if (true) {
        var tmp = 10; // let으로 하면 안되쥬
        console.log("1 : " + tmp);
    }
    console.log("1 : " + tmp);
} 

foo2();


const PI = 3.14;
//PI++; //상수라 안됨