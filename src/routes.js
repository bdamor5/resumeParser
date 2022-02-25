const express = require("express");
const router = express.Router();

const ResumeParser = require('resume-parser');

router.post("/upload/resume", (req, res, next) => {

    ResumeParser
  .parseResumeFile('./files/resume.pdf', './files/compiled') // input file, output dir
  .then(file => {
    console.log("Yay! " + file);
  })
  .catch(error => {
    console.error(error);
  });

    res.status(200).json({ message: "hello" });

})

module.exports = router;
