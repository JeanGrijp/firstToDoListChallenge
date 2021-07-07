const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const database = require('./database');
const errorHandler = require('../helpers/errorHandler');
const requestHandler = require('../helpers/requestHander');
const routes = require('../routes');

dotenv.config();
database()

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);
app.use(errorHandler);
app.use(requestHandler);

module.exports = app;
