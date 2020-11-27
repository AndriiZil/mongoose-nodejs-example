'use strict';

module.exports = app => {
    app.use('/users', require('./users'));
    app.use('/articles', require('./articles'));
    app.use('/topics', require('./topics'));
    app.use('/addresses', require('./addresses'));
};
