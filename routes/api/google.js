const express = require('express');
const router = express.Router();

const controller = require('../../controllers/api/google')

router.post('/auth/google', controller.googleLogin);

module.exports = router;