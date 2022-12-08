const express = require('express');
const { usersController } = require('../controllers');
const { loginRequired } = require('../utils/auth');

const usersRoutes = express.Router();

usersRoutes.get('', loginRequired, usersController.getUserInformation);
usersRoutes.get('/mywritings', loginRequired, usersController.getMyWritings);
usersRoutes.get('/mylikes', loginRequired, usersController.getMyLikes);
usersRoutes.get('/mypurchase', loginRequired, usersController.getMyPurchase);

module.exports = { usersRoutes };
