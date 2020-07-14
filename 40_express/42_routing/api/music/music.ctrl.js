let nextId = 4;

//데이터
let music = [
    {id : 1, singer : "아이유", title : "에잇"},
    {id : 2 ,singer : "방탄소년단", title : "ON"},
    {id : 3 , singer : "오마이걸", title : "한발짝 두발짝"}
]

//목록 조회 (localhost:3000/api/music?limit=10)
// - 성공 : limit 수만큼 music 객체를 담는 배열을 리턴 (200: OK)
// - 실패 : limit가 숫자가 아닌경우 (400: Bad Request)
const list = (req, res) => {
    const limit = parseInt(req.query.limit || 10, 10); // string을 10진수로 변환
    if (Number.isNaN(limit)) return res.status(400).end();
    
    res.json(music.slice(0, limit));
}

//상세조회 (localhost:3000/api/music/:id)
// - 성공 : id에 해당하는 music 객체 리턴 (200: OK)
// - 실패 : id가 숫자가 아닌 경우 (400 : Bad Request)
//          해당하는 id가 없는 경우(404 : Not Found)
const detail = (req, res) => {
    const id = parseInt(req.params.id);

    if (Number.isNaN(id)) return res.status(400).end();

    //const result = music.find(m => m.id === id);
    const result = music.filter((m) => m.id === id)[0];

    if (!result) return res.status(404).end();

    res.json(result);
};

//등록 (POST localhost:3000/api/music)
// - 성공 : id값 채번, 입력된 siger, title값으로 객체를 만들고
//         배열 추가(201: Created)
// - 실패 :singer, title 값 누락시 (400 : Bad Request)
const create = (req, res) => {
    const { singer, title } = req.body;
    if (!singer || !title) return res.status(400).end();
    const m = { id: nextId++, singer, title };
    music.push(m);
    res.status(201).json(m);
}

//수정 (PUT localhost:3000/api/music/:id)
// - 성공 : id에 해당하는 객체의 값을 변경 후 리턴(200: OK)
// - 실패 : id가 숫자가 아닌 경우 (400: Bad Request)
//         해당하는 id가 없는 경우(404 : Not Found)    
const update = (req, res) => {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) return res.status(400).end();
    const result = music.find(m => m.id === id);
    if (!result) return res.status(404).end();
    const { singer, title } = req.body;
    if (singer) result.singer = singer;
    if (title) result.title = title;
    res.json(result);

}

//delete (DELETE localhost:3000/api/music/:id)
// - 성공 : id에 해당하는 객체를 배열에서 삭제 후 배열 리턴 (200: OK)
// - 실패 : id가 숫자가 아닌 경우 (400: Bad Request)
//         해당하는 id가 없는 경우(404 : Not Found)  
const remove = (req, res) => {
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)) return res.status(400).end();

    const result = music.find((m) => m.id === id);
    if (!result) return res.status(404).end();
    music = music.filter((m) => m.id !== id);
    res.json(music);
}


module.exports = { list, detail, create, update, remove };


