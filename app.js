const http = require('http');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { globalErrorHandler } = require('./src/utils/err');

require('dotenv').config();

const { routes } = require('./src/routes');

const createApp = () => {
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(morgan('dev'));
    app.use(routes);
    app.use(globalErrorHandler);

    return app;
};

module.exports = { createApp };
