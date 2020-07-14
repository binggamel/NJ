// application vs middleware
// 뼈대 | 뼈대에 들어갈 필요한 기능

const express = require("express");
const moment = require("moment");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});

//middleware function 
const mw1 = (req, res, next) => {
    console.log("First Middleware");
    next();
};

const mw2 = (req, res, next) => {
    console.log("Second MIddleware");
    next();
};

const logger = (req, res, next) => {
    // const method = req.method;
    const { method, url } = req;
    const time = moment().format("YYYY-MM-DD HH:mm:ss:SSS")
    console.log(`${ method } - ${ url } - ${ time }`);
    next();
    
}

//Middleware는 순서가 중요하다잉
app.use(mw1);
app.use(mw2);
app.use(logger);

app.get("/", (req, res) => {
    res.send("내일 기숙사 입소 제발 하기~");
});