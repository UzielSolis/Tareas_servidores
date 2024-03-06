const router = require('express').Router();
const express = require('express');
const path = require('path');
const authRouter = require('./auth.routes');
const userRouter = require('./user.routes');

router.use(express.json());
router.use('/auth', authRouter);
router.use('/user', userRouter);

router.get('', (req, res) => {
    //res.send('api works');
    //const url = path.join(__dirname, '../../src/views/index.html');
    //res.sendFile(url);
    res.render('home', {
        layout: 'main'
    });
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('register');
});

router.get('/noticias', (req, res) => {
    res.render('noticias', {
        layout: 'main-login'
    });
});

module.exports = router;