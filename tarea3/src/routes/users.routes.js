const router = require('express').Router();
const {getUsers, getUserById} = require('../controllers/users.controllers');
const authMiddleware = require('../middlewares/auth.middleware');
const hasRole = require('../middlewares/role.middleware')

router.use('/users', authMiddleware);
router.get('', getUsers);
router.get('/:id', getUserById);

module.exports = router;