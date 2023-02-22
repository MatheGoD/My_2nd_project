const authDao = require('./authDao');
const writingsDao = require('./writingsDao');
const likesDao = require('./likesDao');
const usersDao = require('./usersDao');
const paymentDao = require('./paymentDao');
const cartsDao = require('./cartsDao');

module.exports = { writingsDao, authDao, usersDao, likesDao, cartsDao, paymentDao };
