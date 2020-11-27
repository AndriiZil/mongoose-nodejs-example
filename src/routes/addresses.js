const { Router } = require('express');
const { Address } = require('../models');

const log = require('../services/logger');
const router = Router();

router.post('/', async (req, res, next) => {
    try {
        const { street, city, country } = req.body;

        const address = await Address.create({ street, city, country });

        return res.json(address);
    } catch (err) {
        log('error', `Error occurred in Address "post" route MESSAGE: ${err.message}`);
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const addresses = await Address.find();

        return res.json(addresses);
    } catch (err) {
        log('error', `Error occurred in Address "get" route MESSAGE: ${err.message}`);
        next(err);
    }
})

module.exports = router;
