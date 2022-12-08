const express = require('express');

const { writingsController } = require('../controllers');
const { loginRequired } = require('../utils/auth');
const writingsRoutes = express.Router();

writingsRoutes.get('/colors', writingsController.getColorList);
writingsRoutes.get('/list', writingsController.getMainList);
writingsRoutes.get('/search', writingsController.searchTitle);
writingsRoutes.get('', writingsController.getWritings);
writingsRoutes.get('/:writing_id', writingsController.getWritingInfo);
writingsRoutes.post('', loginRequired, writingsController.createWriting);

module.exports = { writingsRoutes };
