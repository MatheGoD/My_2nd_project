const express = require("express");
const { likesController } = require("../controllers");

const likesRoutes = express.Router();

likesRoutes.post("/writings/:writing_id", likesController.likeWriting);
likesRoutes.post("/authors/:author_id", likesController.likeAuthor);

module.exports = { likesRoutes };
