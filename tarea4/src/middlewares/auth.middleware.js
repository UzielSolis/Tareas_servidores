const ResponseStatus = require('./../utils/response-status');

const middleware = (req, res, next) => {
    if(req.query.token && req.query.token == '12345') {
        next();
    } else {
        res.sendStatus(ResponseStatus.UNAUTHORIZED);
    }
}

module.exports = middleware;