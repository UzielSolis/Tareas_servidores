const ResponseStatus = require('./../utils/response-status');

const authUser = {
    id: 1,
    role: 'admin',
    name: 'John Doe'
}

const middleware = (req, res, next) => {
    if(req.query.token && req.query.token == '12345') {
        req.user = {...authUser};
        next();
    } else {
        res.sendStatus(ResponseStatus.UNAUTHORIZED);
    }
}

module.exports = middleware;