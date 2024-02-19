const User = require('../models/user.models');
const ResponseStatus = require('../utils/response-status')

class UsersController {
    getUsers(req, res) {
        console.log('Quien hizo la petición? ', req.user);
        User.find().then(response => {
            res.send(response);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        })
    }

    createUser(req, res) {
        res.send('will create a new user');
    }

    getUserById(req, res) {
        const userId = req.params.id;
        res.send('get user ' + userId);
    }

    signup(req, res) {
        const data = {
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }

        User.create(data).then(response => {
            res.send('ok');
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('failed to create user');
        })
    }

    login(req, res) {
        const data = {
            email : req.body.email,
            password : req.body.password
        }

        User.findOne(data).then(response => {
            if(response) {
                res.send('ok');
            } else {
                res.status(ResponseStatus.UNAUTHORIZED).send('failed to login');
            }
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('failed to login');
        })
    }
}

module.exports = new UsersController();