const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controllers');

router.post('/', authController.handleLogin);

module.exports = router;