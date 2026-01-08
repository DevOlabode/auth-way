const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth');

const catchAsync = require('../utils/catchAsync');

router.get('/login', controller.loginForm);

router.post('/login',  passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true,
  }), controller.login);

module.exports = router;