const express = require('express');
const { usersContorller } = require('../controllers');
const { loginRequired } = require('../utils/auth');
const usersRoutes = express.Router();

usersRoutes.get('', loginRequired, usersContorller.getMyPage);

module.exports = { usersRoutes };
