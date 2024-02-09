const router = require('express').Router();
const usersController = require('./../controllers/user.controller');

router.get('', usersController.getUsers);
router.get('/:id', usersController.getUsersById);
router.post('', usersController.postUser);
router.put('/:id', usersController.putUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;