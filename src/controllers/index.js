const authController = require('./authController');
const writingsController = require('./writingsController');
const likesController = require('./likesController');
const usersContorller = require('./usersController');
const paymentController = require('./paymentController');
const cartsController = require('./cartsController');

module.exports = {
    writingsController,
    authController,
    usersContorller,
    likesController,
    cartsController,
    paymentController,
};
