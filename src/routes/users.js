'use strict';

const { Router } = require('express');
const log = require('../services/logger');

const { User } = require('../models');

const router = Router();

router.post('/', async (req, res, next) => {
    try {
        const { name, age, addresses } = req.body;

        const user = await User.create({ name, age, addresses });

        return res.json({
            success: true,
            data: user
        });
    } catch (err) {
        log('error', `Error occurred in Users "post" route MESSAGE: ${err.message}`);
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const user = await User.find().populate({
            path: 'addresses',
            select: '-_id -__v' // exclude _id and __v from objects
        });

        return res.send(user);
    } catch (err) {
        next(err);
        log('error', `Error occurred in Users "get" route MESSAGE: ${err.message}`);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        console.log(user.fullInfo); // Only on get single user

        return res.send(user);
    } catch (err) {
        next(err);
        log('error', `Error occurred in Users "get" route MESSAGE: ${err.message}`);
    }
});

module.exports = router;
