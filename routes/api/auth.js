const express = require('express');
const router = express.Router();

const { verifyClient } = require('../../middleware/verifyClient');
const authController = require('../../controllers/api/auth');

/*
  Headers required:
  X-Client-Id: app_xxx
  Authorization: Bearer client_secret
*/

router.post('/register', verifyClient, authController.register);

router.post('/login', verifyClient, authController.login);

module.exports = router;