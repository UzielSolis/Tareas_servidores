const router = require('express').Router();
const usersController = require('./../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const hasRole = require('../middlewares/role.middleware')

// Rutas para usuarios sin autenticación
router.get('', usersController.getUsers);
router.get('/:id', usersController.getUsersById);
router.post('', usersController.postUser);
router.put('/:id', usersController.putUser);
router.delete('/:id', usersController.deleteUser);

// Rutas para usuarios con autenticación
// router.get('', authMiddleware, hasRole('admin'), usersController.getUsers);
// router.get('/:id', authMiddleware, hasRole('admin'), usersController.getUsersById);
// router.post('', authMiddleware, hasRole('admin'), usersController.postUser);
// router.put('/:id', authMiddleware, hasRole('admin'), usersController.putUser);
// router.delete('/:id', authMiddleware, hasRole('admin'), usersController.deleteUser);

module.exports = router;