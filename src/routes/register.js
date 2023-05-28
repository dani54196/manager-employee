const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register.controllers');

router.post('/', registerController.handleNewUser);

module.exports = router;3