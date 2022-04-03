const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes/routes'));

app.listen(port);

module.exports = app;
