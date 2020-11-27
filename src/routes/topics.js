const { Router } = require('express');

const log = require('../services/logger');

const router = Router();

router.post('/', async (req, res, next) => {
    try {

        return res.json('ok');
    } catch (err) {
        log('error', `Error occurred in Topic "post" route MESSAGE: ${err.message}`);
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {

        return res.json('ok');
    } catch (err) {
        log('error', `Error occurred in Topic "get" route MESSAGE: ${err.message}`);
        next(err);
    }
});

module.exports = router;
