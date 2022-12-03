const express = require('express');

const authRoutes = express.Router();

const { authController } = require('../controllers');

authRoutes.post('/signin', authController.signIn);

module.exports = { authRoutes };
