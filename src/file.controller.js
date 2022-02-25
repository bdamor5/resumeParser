const uploadFile = require("./upload");
const ResumeParser = require('resume-parser');

const upload = async (req, res) => {
  try {
    await uploadFile(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    ResumeParser
  .parseResumeFile(`./src/files/${req.file.originalname}`, './src/files/compiled') // input file, output dir
  .then(file => {
    
    console.log("Yay! " + file);
    const result = require(`../src/files/compiled/${file}.json`)
    res.status(200).json({ data: result });

  })
  .catch(error => {
    console.error(error);
  });
    // res.status(200).send({
    //   message: "Uploaded the file successfully: " + req.file.originalname,
    // });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file}. ${err}`,
    });
  }
};
const getListFiles = (req, res) => {
    const directoryPath = __basedir + "/resources/static/assets/uploads/";
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        res.status(500).send({
          message: "Unable to scan files!",
        });
      }
      let fileInfos = [];
      files.forEach((file) => {
        fileInfos.push({
          name: file,
          url: baseUrl + file,
        });
      });
      res.status(200).send(fileInfos);
    });
  };
  const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/resources/static/assets/uploads/";
    res.download(directoryPath + fileName, fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: "Could not download the file. " + err,
        });
      }
    });
  };
  module.exports = {
    upload,
    getListFiles,
    download,
  };