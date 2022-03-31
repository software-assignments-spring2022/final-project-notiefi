const express = require('express');
require('dotenv').config();
const allClasses = require('./test/classes/all.js')

const router = express.router()

router.get('/browse', (res, req, next) => {
    res.send(allClasses)
});

