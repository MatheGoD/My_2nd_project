const express = require('express');

const { writingsController } = require('../controllers');
const { loginRequired } = require('../utils/auth');
const writingsRoutes = express.Router();

writingsRoutes.get('/search', writingsController.searchTitle);
writingsRoutes.get('', writingsController.getWritings);
writingsRoutes.get('/:writings_id', writingsController.getwritingInfo);
writingsRoutes.post('', loginRequired, writingsController.createWriting);

module.exports = { writingsRoutes };
