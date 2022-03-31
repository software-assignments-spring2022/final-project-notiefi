const express = require('express');
const browse = require('./classes/index.js');
const notes = require('./notes/index.js')

const app = express()

module.exports = (app) => {
    app.use('/browse', browse);
    app.use('/:slug/:slug', notes);
}