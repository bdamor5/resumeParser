const parseIt = require('./utils/parseIt');
var logger = require('tracer').colorConsole();
const express = require('express');
const app = express();
const cors = require("cors");
const resume = require('./routes')
const dotenv = require('dotenv')
    dotenv.config()
global.__basedir = __dirname;
app.use(cors())

app.get('/' , (req,res) => {
    res.status(200).json({message:'resume parsing API'})
})

app.use('/',resume)

// module.exports.parseResumeFile = function(inputFile, outputDir) {
//   return new Promise((resolve, reject) => {
//     parseIt.parseResumeFile(inputFile, outputDir, function(file, error) {
//       if (error) {
//         return reject(error);
//       }
//       return resolve(file);
//     });
//   });
// };

// module.exports.parseResumeUrl = function(url) {
//   return new Promise((resolve, reject) => {
//     parseIt.parseResumeUrl(url, function(file, error) {
//       if (error) {
//         return reject(error);
//       }
//       return resolve(file);
//     });
//   });
// };

app.listen(process.env.PORT,() => console.log('SERVER RUNNING ON PORT 6000'))