// const express = require("express");
// const router = express.Router();

const { Router } = require("express");
const router = Router();

router.use("/movie", require("./crew/index"));
router.use("/user", require("./user"));

module.exports = router;
