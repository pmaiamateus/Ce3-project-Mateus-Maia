const express = require('express');
const cors = require('cors');

const errorHandler = require('./middlewares/errorHandler');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use(errorHandler);

module.exports = app;