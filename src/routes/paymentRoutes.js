const express = require('express');
const { paymentController } = require('../controllers');
const { loginRequired } = require('../utils/auth');

const paymentRoutes = express.Router();

paymentRoutes.post('', loginRequired, paymentController.arrangePayment);
paymentRoutes.post('/approval', loginRequired, paymentController.finalizePayment);

module.exports = { paymentRoutes };
