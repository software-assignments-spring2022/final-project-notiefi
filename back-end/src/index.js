const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
// const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(port);
