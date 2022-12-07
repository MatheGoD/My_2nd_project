const express = require('express');
const { usersController } = require('../controllers');

const usersRoutes = express.Router();

usersRoutes.post('', usersController.getUserInformation);
usersRoutes.post('/mywritings', usersController.getMyWritings);
usersRoutes.post('/mylikes', usersController.getMyLikes);
usersRoutes.post('/mypurchase', usersController.getMyPurchase);

module.exports = { usersRoutes };
