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
    res.status(200).send('Resume Server Parsing API')
})

app.use('/',resume)

app.listen(process.env.PORT || 6000,() => console.log('SERVER RUNNING ON PORT 6000'))