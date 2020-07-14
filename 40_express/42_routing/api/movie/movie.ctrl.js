let nextId = 4;

//데이터
let movie = [
    { id: 1, title: "스타워즈", director: "조지 루카스", year: "1977" },
    { id: 2, title: "아바타", director: "제임스 카메론", year: "2009" },
    { id: 3, title: "너의 이름은", director:"신카이 마코토", year: "2016"}
]

//목록 조회
// - 성공 : limit 수만큼 music 객체를 담는 배열을 리턴 (200: OK)
// - 실패 : limit가 숫자가 아닌경우 (400: Bad Request)
const list = (req, res) => {
    const limit = parseInt(req.query.limit || 10, 10)
    if (Number.isNaN(limit)) return res.status(400).end();

    res.json(movie.slice(0, limit));
}

//상세조회 (localhost:3000/api/music/:id)
// - 성공 : id에 해당하는 music 객체 리턴 (200: OK)
// - 실패 : id가 숫자가 아닌 경우 (400 : Bad Request)
//          해당하는 id가 없는 경우(404 : Not Found)

const detail = (req, res) => {
    const id = parseInt(req.params.id);

    if (Number.isNaN(id)) return res.status(400).end();

    //const result = music.find(m => m.id === id);
    const result = movie.filter((m) => m.id === id)[0];

    if (!result) return res.status(404).end();

    res.json(result);
}

//등록 (POST localhost:3000/api/music)
// - 성공 : id값 채번, 입력된 siger, title값으로 객체를 만들고
//         배열 추가(201: Created)
// - 실패 :singer, title 값 누락시 (400 : Bad Request)
const create = (req, res) => {
    const { title, director, year } = req.body;
    console.log(title, director, year);
    if (!title || !director || !year) return res.status(400).end();
    const m = { id: nextId++, title, director , year};
    movie.push(m);
    res.status(201).json(m);
}

//수정 (PUT localhost:3000/api/music/:id)
// - 성공 : id에 해당하는 객체의 값을 변경 후 리턴(200: OK)
// - 실패 : id가 숫자가 아닌 경우 (400: Bad Request)
//         해당하는 id가 없는 경우(404 : Not Found)
const update = (req, res) => {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) return res.status(400).end();
    const result = movie.find(m => m.id === id);
    if (!result) return res.status(404).end();
    const { title, director, year } = req.body;
    if (title) result.title = title;
    if (director) result.director = director;
    if (year) result.year = year;
    res.json(result);
}

//delete (DELETE localhost:3000/api/music/:id)
// - 성공 : id에 해당하는 객체를 배열에서 삭제 후 배열 리턴 (200: OK)
// - 실패 : id가 숫자가 아닌 경우 (400: Bad Request)
//         해당하는 id가 없는 경우(404 : Not Found)  
const remove = (req, res) => {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) return res.status(400).end();

    const result = movie.find((m) => m.id === id);
    if (!result) return res.status(404).end();
    movie = movie.filter((m) => m.id !== id);
    res.json(movie);
}


module.exports = { list, detail, create, update, remove };


