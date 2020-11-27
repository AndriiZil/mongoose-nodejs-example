const express = require('express');
const logger = require('morgan');

const { PORT } = require('./src/configs/keys');
const router = require('./src/routes');
const { errorHandler } = require('./src/middlewares');

require('./src/models/db');

const port = PORT || 3000;

const app = express();

app.use(express.json());

app.use(logger('dev'));

router(app);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server was started on port: "${port}"`);
});
