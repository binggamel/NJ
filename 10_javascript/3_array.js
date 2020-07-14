//배열선언
let arr = [1, 2, 3, 4, 5]; // array : [] , object : {}
console.log(arr.length); //5
console.log(arr[2]); //3

let arr2 = [1, 2, "apple", "banana"];
console.log(arr[arr.length - 1]);

//반복문
for (var i = 0; i < arr2.length; i++){
    console.log(arr2[i]);
}


//foir-in
for (var i in arr2) {
    console.log(i);
}


//for-of
for (var i of arr2) {
    console.log(i);
}

//splice : index, howmany(delete number) , elements..
let arr3 = ["a", "b", "c"];
//a,d,b,c,
arr3.splice(1, 0, "d");
console.log(arr3);

//a,x,y,b,c
arr3.splice(1, 1, "x", "y");
console.log(arr3);

let b = [1, 2, 3, 4, 5];
console.log(b.slice(0, 2));

const result = b.find(item => item >= 3);
console.log(result);

const result2 = b.filter(item => item >= 3)
console.log(result2 + 2);