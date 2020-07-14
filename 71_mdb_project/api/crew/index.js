// 라우팅 모듈 작성
const express = require("express");
const router = express.Router();
const ctrl = require("./crew.ctrl");

// 목록조회
//localhost:3000/music/
router.get("/", ctrl.list);

// 상세조회 (localhost:3000/music/:id)
router.get("/:id", ctrl.checkId, ctrl.detail);

// 삭제
router.delete("/:id", ctrl.checkId, ctrl.remove);

module.exports = router;
