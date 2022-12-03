const express = require("express");

const { writingsController } = require("../controllers");

const writingsRoutes = express.Router();

writingsRoutes.get("/search", writingsController.searchTitle);

module.exports = { writingsRoutes };
