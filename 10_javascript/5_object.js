let a = {}; // array : [] , object : {}
let b = new Object();
console.log(typeof a);

//key : value
let Person = {
    age: 19, 
    name: "빙가멜",
    print() {
        console.log("%d살 %s입니다", this.age, this.name);
    }
};

//object.속성명 , object["속성명"]
console.log("%d살 %s입니다", Person.age, Person.name);
console.log("%d살 %s입니다", Person["age"], Person["name"]);
Person.print();

//Frinds 배열 두 객체 담기
let Frinds = [
    Me = {
        no: 3304,
        name: "김가은"
    },
    Sumi = {
        no: 3310,
        name: "민수미"

    }
];

console.log(Frinds[1]);

let score = {
    data: {
        kor: 100, mat: 90, eng: 95
    },
    print() {
        for (var subject in this.data) {
            console.log(subject + " : " + this.data[subject]);
        }
    },
    sum() {
        let obj = this.data;
        //return this.data.kor + this.data.mat + this.data.eng;
        return obj.kor + obj.mat + obj.eng;
    },
    avg() {
        let count = Object.keys(this.data).length;
        return this.sum() / count;
    }
};
score.print();
console.log(score.sum());
console.log(score.avg());

//ES6
let id = 1;
let name = "홍길동";
let obj = {
    // id: id,
    id,
    // name: name
    name
};

console.log("%d %s", obj.id, obj.name);