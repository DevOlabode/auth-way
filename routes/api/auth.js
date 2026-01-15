const express = require('express');
const router = express.Router();

//Rate Limiters

const { apiLimiter } = require('../../middleware/rateLimiters');


const { verifyClient } = require('../../middleware/verifyClient');
const authController = require('../../controllers/api/auth');

const { verifyEndUserJWT } = require('../../middleware/verifyEndUserJWT');

const requireEndUserAuth = require('../../middleware/requireEndUserAuth');

const { authLimiter } = require('../../middleware/rateLimiters');

const { validate } = require('../../validators/validate');
const schemas = require('../../validators/api/endUserAuth');

router.use(apiLimiter);

/*
  Headers required:
  X-Client-Id: app_xxx
  Authorization: Bearer client_secret
*/

router.post('/register', validate(schemas.registerSchema), verifyClient, authLimiter, authController.register);

router.post('/login', validate(schemas.loginSchema), verifyClient, authLimiter, authController.login);

router.get('/me', verifyEndUserJWT, authController.me);

router.post('/logout', requireEndUserAuth, authController.logout);

module.exports = router;