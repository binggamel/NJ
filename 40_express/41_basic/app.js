const express = require('express')
const bodyParser = require("body-parser")
const logger = require("morgan");
const app = express()
const port = 3000

// 바디파서 설정 : form으로 전달되는 메시지를 파싱해줄 때 
// true: qs(확장모듈), false: querystring(기본모듈)
app.use(bodyParser.urlencoded({ extended: false }));
// 정적 파일 위치 설정
app.use(express.static("public")); //정적파일의 루트디렉토리 연결
// localhost:3000/static/music.html
// app.use("/static", express.static("public"));


app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`
));




app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use(logger("dev"));


app.use(bodyParser.json());


// / hello?name=홍길동 -> 안녕하세요 홍길동님
//query string방식
app.get('/hello', (req, res) => {
    console.log(req);
    // const name = req.query.name;
    // 추가문법 객체 구조 분해 할당
    const { name } = req.query; // { name : '홍길동'}
    res.send(`<h1>경| 아이유, 방탄소년단 ${ name } 협업 |축</h1>`);
});


app.get('/music', (req, res) => {
    // const name = req.query.name;
    // 추가문법 객체 구조 분해 할당
    const { singer, date } = req.query; // { name : '홍길동'}
    res.send(`query string(get) : <h1>경| 아이유와 방탄소년단 ${ singer }, ${date} 피쳐링 신곡 |축</h1>`);
});

// URL 파라미터 (REST API)
// 127.0.0.1:3000/music/아이유/좋은날
app.get("/music/:singer/:title", (req, res) => {
    const { singer, title } = req.param;
    res.send(`url parameter(get) : ${singer}의 ${title}입니다.`);
});


// POST 방식
// 1. form 전송 -> data를 꺼내는 방법
// 2. URL 파라미터(post) -> req,params
// 3. HTTP Message = Header + Body
// GET방식 : 데이터를 URL에 ? 뒤의 Query String을 통해 데이터 전송
//  Header부에 데이터ㅓ 전송, 길이제한 있음, 캐싱 됨
// Post방식 : 데이터를 Body부에 전송, 길이 제한 없음, 캐싱 안됨
// 한글 : url인코딩 -> 디코딩
// form으로 데이터 전송시 content-type L x-www-form-urlencoded

app.post("/music", (req, res) => {
    const { singer, title } = req.body;
    res.send(`urlencoded(post) -> ${singer}의 ${title}입니다.`);
});

// url 파라미터 전송 ( RESTFul API)
// localhost:3000/music/아이유/좋은날
app.post("/music/:singer/:title", (req, res) => {
    const { singer, title } = req.params;
    res.send(`url parameter(post) -> ${singer}의 ${title}입니다`);
});


//PUT : localhost:3000/music/{id}
//{singer: "아이유", title: "에잇"}
//결과 : {id} -> 아이유의 에잇으로 수정됨
app.put("", (req, res) => {
    const { id } = req.params;
    //json을 넘길 때
    const { singer, title } = req.body;
    res.send(`${id} -> ${singer}의 ${title}으로 수정됨`);

});


// 여기까지 내려왔다는것은 위에서 처리가 되지 않은 것
app.use((req ,res, next) => {
    // throw new Error("없는 페이지 입니다");
    const error = new Error("없는 페이지입니다");
    error.code = 404; // 404 : Not Found
    next(error);
    // throw new Error();
});

//오류처리 미들웨어
app.use((err, req, res, next) => {
    // if (err.code) res.status(err.code);
    // else res.status(500);
    res.status(err.code || 500);
    // if (err.message) res.send(err.message);
    // else res.send("Internal Server Error");
    res.send(err.message || "Internal Server Error");
});
// RESTFul API
// 1. HTTP 요청 : 모든 자원은 명사로 작성
// 예) GET /users, GET /users/{id}
// test.con/users [GET] : 사용자 목록 조회, /users/{id} : 상세조회
// test.com/users [POST] : 사용자 생성
// test.com/users/{id} [PUT] : 사용자 변경
// test.com/users/{id} [DELETE] : 사용자 삭제


// (bad case)
// test.com/users/create
// test.com/users/search
// test.com/users/update
// test.com/users/delete




