const router = require('express').Router();
const { signup, login } = require('../controllers/users.controllers');

router.get('', (req, res) => {
    res.send('Auth works!');
    });

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;