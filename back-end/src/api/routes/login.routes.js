const express = require('express');
const { createUser } = require('../controllers/users');
const { userReqValidator } = require('../middlewares/reqValidator');

const loginRouter = express.Router();

loginRouter.post('/', userReqValidator, createUser);

module.exports = loginRouter;