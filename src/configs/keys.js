'use strict';

const path = require('path');

const dotenv = require('dotenv').config({ path: path.join(__dirname, '../../.env') });

if (dotenv.error) {
    throw new Error('.env file is required.');
}

module.exports = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT
};
