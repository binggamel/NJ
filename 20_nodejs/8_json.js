//JSON 연습

const singer = {
    name : "BTS",
    member: ["김남준", "김석진", "민윤기", "정호석", "박지민", "김태형", "전정국"],
    songs: [
        {
            title: "ON",
            year: 2020,
        },
        {
            title: "작은 것들을 위한 시",
            year:2019
        },
    ],
};

//JSON object -> string
const str = JSON.stringify(singer);
console.log(str);

//string -> JSON object
const obj = JSON.parse(str);
console.log(obj);

console.log(obj.member[4]);

console.log(obj.songs[1].title);