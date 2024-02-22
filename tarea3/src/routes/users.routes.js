const router = require('express').Router();
const userController = require('../controllers/users.controllers');
const authMiddleware = require('../middlewares/auth.middleware');
//const hasRole = require('../middlewares/role.middleware')

router.use('', authMiddleware);
router.get('', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;