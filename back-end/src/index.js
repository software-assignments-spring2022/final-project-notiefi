const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
require('./routes/routes.js')(app);

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);
