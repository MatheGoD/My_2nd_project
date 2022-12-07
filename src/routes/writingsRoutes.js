const express = require('express');

const { writingsController } = require('../controllers');

const writingsRoutes = express.Router();

writingsRoutes.get('/search', writingsController.searchTitle);
writingsRoutes.get('', writingsController.getAllWritings);
writingsRoutes.get('/:writing_id', writingsController.getWritingInfo);
writingsRoutes.post('', writingsController.createWriting);
writingsRoutes.put('', writingsController.editWriting);
writingsRoutes.delete('', writingsController.deleteWriting);

module.exports = { writingsRoutes };
