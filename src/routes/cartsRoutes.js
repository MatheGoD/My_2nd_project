const express = require('express');
const { cartsController } = require('../controllers');

const cartsRoutes = express.Router();

cartsRoutes.get('', cartsController.showCart);
cartsRoutes.post('', cartsController.addCart);
cartsRoutes.delete('', cartsController.deleteCart);

module.exports = { cartsRoutes };
