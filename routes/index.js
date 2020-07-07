const express = require('express');
const router = express.Router();
const path = require('path');
const { listenerCount } = require('cluster');

let username = '';

router.get('/', (request, response, next) => {
    response.render('home', { pageTitle: 'Home Page'});
});

router.post('/users', (request, response, next) => {
    username = request.body;
    response.redirect('/users');
});

router.get('/users', (request, response, next) => {
    response.render('users', { pageTitle: 'Users', user: username });
});





module.exports = router;