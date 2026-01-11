const express = require('express');
const router = express.Router();
const controller = require('../../controllers/web/app');
const {isLoggedIn} = require('../../middleware');

router.use(isLoggedIn);

router.get('/new', controller.newForm)

module.exports = router;