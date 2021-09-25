const express = require('express');
const validate = require('express-validation');
const validator = require('./validation');
const controller = require('./controller');

const { expressAuthenticate: authenticate } = require('kopitech-authentication-client');

const router = express.Router({ mergeParams: true });

router.route('/login')
  .post(
    validate(validator.loginUser),
    controller.loginUser,
  );

router.route('/client')
  .post(
    validate(validator.loginClient),
    controller.loginClient,
  );

module.exports = router;
