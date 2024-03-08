const router = require('express').Router();
const { getNews } = require('../controllers/news.controllers');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('', getNews);

module.exports = router;