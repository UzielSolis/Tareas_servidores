const User = require('../models/user.models');
const ResponseStatus = require('../utils/response-status')

class UsersController {
    getUsers(req, res) {
        User.find().then(response => {
            res.send(response);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        })
    }

    getUserById(req, res) {
        const id = req.params.id;

        User.findById(id).then(response => {
            res.send(response);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        });
    }

    createUser(req, res) {
        const data = {
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }

        User.create(data).then(response => {
            res.send(response);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('failed to create user');
        })
    }

    updateUser(req, res) {
        const id = req.params.id;
        const data = {
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            status : req.body.status,
            role : req.body.role
        }
        if(req.body.name != undefined) {
            data.name = req.body.name;
        } else if(req.body.email != undefined) {
            data.email = req.body.email;
        } else if(req.body.password != undefined) {
            data.password = req.body.password;
        } else if(req.body.status != undefined) {
            data.status = req.body.status;
        } else if(req.body.role != undefined) {
            data.role = req.body.role;
        }

        User.findByIdAndUpdate(id, data, {new : true}).then(response => {
            console.log('Usuario actualizado');
            res.send(response);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('failed to update user');
        });
    }

    deleteUser(req, res) {
        const id = req.params.id;

        User.findByIdAndDelete(id).then(response => {
            res.send('ok');
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('failed to delete user');
        });
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