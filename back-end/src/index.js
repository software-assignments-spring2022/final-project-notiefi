const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
require('./routes/routes.js')(app);

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(port);

module.exports = app;