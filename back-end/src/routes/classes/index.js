const express = require('express');
require('dotenv').config();
const allClasses = require('./test/classes/all.js')

const app = express();

app.get('/browse', (res, req, next) => {
    res.send(allClasses)
});

