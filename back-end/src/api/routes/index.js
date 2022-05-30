const express = require('express');
const loginRoute = require('./login.routes');

const router = express.Router();

router.use('/user', loginRoute);

module.exports = router;