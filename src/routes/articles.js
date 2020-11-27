const { Router } = require('express');
const { Article } = require('../models');

const log = require('../services/logger');

const router = Router();

router.post('/', async (req, res, next) => {
    try {
        const { street, city, country } = req.body;

        const article = await Article.create({ street, city, country });

        return res.json(article);
    } catch (err) {
        log('error', `Error occurred in Article "post" route MESSAGE: ${err.message}`);
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const articles = await Article.find().populate({
            path: 'userId',
            select: 'name'
        });

        return res.json(articles);
    } catch (err) {
        log('error', `Error occurred in Article "get" route MESSAGE: ${err.message}`);
        next(err);
    }
});

module.exports = router;
