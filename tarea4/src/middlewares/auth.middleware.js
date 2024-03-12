const ResponseStatus = require('./../utils/response-status');
const jwt = require('jsonwebtoken');

const middleware = (req, res, next) => {
    const token = req.query.token;
    if(!token) {
        res.status(ResponseStatus.UNAUTHORIZED).send('unauthorized');
        return;
    }

    data = jwt.verify(token, process.env.TOKEN_KEY);
    if(!data) {
        res.status(ResponseStatus.UNAUTHORIZED).send('unauthorized');
        return;
    }

    req.user = data;
    next();
}

module.exports = middleware;