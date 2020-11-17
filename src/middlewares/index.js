module.exports = {
    errorHandler: (err, req, res, next) => {
        console.log(err.stack);
        const code = err.code || err.status || 500;
        const message = err.message || 'Unknown Error';

        res.status(code).send({ message });
    }
};
