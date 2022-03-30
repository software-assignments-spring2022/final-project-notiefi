const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
// const path = require('path');
const allClasses = require('./test/classes/all.js')

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'test')));

app.listen(port);

app.get('/browse', (res, req, next) => {
    res.send(allClasses)
});
