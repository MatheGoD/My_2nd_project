const express = require('express');
const { likesController } = require('../controllers');
const { loginRequired } = require('../utils/auth');

const likesRoutes = express.Router();

likesRoutes.post('/writings/:writing_id', loginRequired, likesController.likeWriting);
likesRoutes.post('/authors/:author_id', loginRequired, likesController.likeAuthor);

module.exports = { likesRoutes };
