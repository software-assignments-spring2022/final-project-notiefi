const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

mongoose.connect(process.env.DB_CONNECTION || 'mongodb://localhost:27017/notiefi');

const app = express();

const port = process.env.PORT || 3001;
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(port);

module.exports = app;
