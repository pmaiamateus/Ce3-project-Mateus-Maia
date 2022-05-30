const express = require('express');
const { createUser, updateUser } = require('../../controllers/users');
const { userReqValidator } = require('../../middlewares/reqValidator');

const loginRouter = express.Router();

loginRouter.post('/', userReqValidator, createUser);
loginRouter.put('/', userReqValidator, updateUser);

module.exports = loginRouter;