const router = require('express').Router();
const userRouter = require('./users.routes');

router.use('/users', userRouter);

router.get('', (req, res) => {
    res.send('router works');
})

module.exports = router;