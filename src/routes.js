const express = require("express");
const router = express.Router();
const controller = require("./file.controller");
const ResumeParser = require('resume-parser');

router.post("/upload/resume", controller.upload)

module.exports = router;
