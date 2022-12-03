const express = require("express");
const { likesRoutes } = require("./likesRoutes");
const { writingsRoutes } = require("./writingsRoutes");
const routes = express.Router();

routes.use("/likes", likesRoutes);
routes.use("/writings", writingsRoutes);

module.exports = { routes };
