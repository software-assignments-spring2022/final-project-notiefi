const express = require('express');
const allNotes = require('./test/notes/all.js')

const router = express.router()

router.get('/browse', (res, req, next) => {
    res.send(allNotes);
});