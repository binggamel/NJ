// 라우팅 모듈 작성
const express = require("express");
const router = express.Router();
const ctrl = require("./movie.ctrl")

// 목록조회
//localhost:3000/music/
router.get("/",ctrl.list);

// 상세조회 (localhost:3000/music/:id)
router.get("/:id",ctrl.detail);

// 등록
router.post("/",ctrl.create);

// 수정
router.put("/:id", ctrl.update);

// 삭제
router.delete("/:id", ctrl.remove);

module.exports = router;