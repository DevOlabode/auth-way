const express = require('express');
const router = express.Router();

const controller = require('../../controllers/api/google');

const requireEndUserAuth = require('../../middleware/requireEndUserAuth');

router.get('/register', requireEndUserAuth, controller.googleRegister);

router.post('/login', requireEndUserAuth, controller.googleLogin);

module.exports = router;