const User = require('./../models/users.models');
const ResponseStatus = require('./../utils/response-status')

class UsersController {
    getUsers(req, res) {
        const user = new User();
        user.getUsers().then(response => {
            res.send(response.data);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        })
    }

    getUsersById(req, res) {
        const user = new User();
        user.getUsersById(req.params.id).then(response => {
            res.send(response.data);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        })
    }

    postUser(req, res) {
        const user = new User();
        user.postUser(req.body).then(response => {
            res.status(ResponseStatus.CREATED).send(response.data);
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        })
    }

    putUser(req, res) {
        const user = new User();
        user.putUser(req.params.id, req.body).then(response => {
            res.send(response.data);
            console.log('Usuario modificado');
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        })
    }

    deleteUser(req, res) {
        const user = new User();
        user.deleteUser(req.params.id).then(response => {
            res.send(response.data)
            console.log('usuario eliminado');
        }).catch(e => {
            res.status(ResponseStatus.BAD_REQUEST).send('something went wrong');
        })
    }
}

module.exports = new UsersController();