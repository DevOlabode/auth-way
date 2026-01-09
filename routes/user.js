const express = require('express');
const router = express.Router();

const controller = require('../controllers/user');
const catchAsync = require('../utils/catchAsync');

const { isLoggedIn } = require('../middleware')

router.get('/dashboard', catchAsync(controller.dashboard));

module.exports = router;