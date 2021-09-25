const express = require('express');
const validate = require('express-validation');
const validator = require('./validation');
const controller = require('./controller');

const { expressAuthenticate: authenticate } = require('kopitech-authentication-client');

const router = express.Router({ mergeParams: true });

router.route('/')
  .get(
    validate(validator.doSomething),
    controller.doSomething,
  );

module.exports = router;
