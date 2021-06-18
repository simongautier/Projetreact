const express = require("express");
const router = express.Router();

const { test } = require("../controllers/main");

router.get("/fiak", test);

module.exports = router;