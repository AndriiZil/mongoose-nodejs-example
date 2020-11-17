'use strict';

const { Router } = require('express');
const log = require('../services/logger');

const User = require('../models/User');

const router = Router();

router.post('/', async (req, res, next) => {
    try {
        const user = await User.create({ name: 'Andrii', age: 35 });

        return res.send(user);
    } catch (err) {
        next(err);
        log('error', `Error occurred in Users "post" route MESSAGE: ${err.message}`);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const user = await User.findOne({ name: 'Andrii' });

        user.fullInfo // Andrii - 35

        return res.send(user);
    } catch (err) {
        next(err);
        log('error', `Error occurred in Users "get" route MESSAGE: ${err.message}`);
    }
})

module.exports = router;
