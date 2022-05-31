const express = require('express');
const loginRoute = require('./login.routes');
const conveniosRouter = require('./convenios.routes')

const router = express.Router();

router.use('/user', loginRoute);
router.use('/convenios', conveniosRouter)

module.exports = router;