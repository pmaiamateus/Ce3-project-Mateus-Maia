const express = require('express');
const { getConveniosController } = require('../controllers/convenios')

const conveniosRouter = express.Router();

conveniosRouter.get('/', getConveniosController);

module.exports = conveniosRouter;