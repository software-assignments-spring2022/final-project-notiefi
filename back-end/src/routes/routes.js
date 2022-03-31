const express = require('express');
const browse = require('./classes/index.js');

const app = express()

module.exports = (app) => {
    app.use('/browse', browse);
}