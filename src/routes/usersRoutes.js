const express = require('express');
const { usersController } = require('../controllers');

const usersRoutes = express.Router();

usersRoutes.get('', usersController.getUserInformation);
usersRoutes.get('/mywritings', usersController.getMyWritings);
usersRoutes.get('/mylikes', usersController.getMyLikes);
usersRoutes.get('/mypurchase', usersController.getMyPurchase);

module.exports = { usersRoutes };
