const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const ResponseStatus = require('../utils/response-status');
const hashPassword = require('../utils/hash-password');

class UsersController {

    signup(req, res) {
        const data = {
            name : req.body.name,
            email : req.body.email,
            password : hashPassword(req.body.password)
        }

        User.create(data).then(response => {
            res.status(ResponseStatus.CREATED).send('user created');
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('failed to create user');
        })
    }

    login(req, res) {
        const data = {
            email : req.body.email,
            password : hashPassword(req.body.password)
        }

        User.findOne(data).then(response => {
            if(response) {
                const data = {
                    name : response.name,
                    email : response.email,
                }

                const token = jwt.sign(data, process.env.TOKEN_KEY);
                res.status(ResponseStatus.SUCCESS).send({token});                

            } else {
                res.status(ResponseStatus.UNAUTHORIZED).send('failed to login');
            }
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('failed to login');
        })
    }
}

module.exports = new UsersController();