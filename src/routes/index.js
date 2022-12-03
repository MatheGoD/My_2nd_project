const express = require('express');
const { likesRoutes } = require('./likesRoutes');
const { writingsRoutes } = require('./writingsRoutes');
const { cartsRoutes } = require('./cartsRoutes');
const { usersRoutes } = require('./usersRoutes');
const { authRoutes } = require('./authRoutes');
const routes = express.Router();

routes.use('/likes', likesRoutes);
routes.use('/writings', writingsRoutes);
routes.use('/carts', cartsRoutes);
routes.use('/mypage', usersRoutes);
routes.use('/auth', authRoutes);

module.exports = { routes };
