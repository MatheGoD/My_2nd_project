const express = require('express');

const authRoutes = express.Router();

const { authController } = require('../controllers');

authRoutes.get('/signin', authController.signIn);

module.exports = { authRoutes };
