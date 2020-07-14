// const express = require("express");
// const router = express.Router();

const { Router } = require("express");
const router = Router();

router.use("/music", require("./music/index"));
router.use("/movie", require("./movie/index"));
router.use("/user", require("./user"));

module.exports = router;
