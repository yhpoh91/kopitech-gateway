const express = require('express');

const authRouter = require('./auth');

const { L } = require('kopitech-logger')('Global Router');

const router = express.Router({ mergeParams: true });

router.get('/', (_, res) => res.send('Gateway is online'));
router.use('/auth', authRouter);


module.exports = router;
