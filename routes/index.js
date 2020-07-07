const express = require('express');
const router = express.Router();
const path = require('path');


let username = '';
let users = [];

router.get('/', (request, response, next) => {
    response.render('home', { pageTitle: 'Home Page'});
});

router.post('/users', (request, response, next) => {
    username = request.body.username;
    users.push({name: username});
    response.redirect('/users');
});

router.get('/users', (request, response, next) => {
    response.render('users', { pageTitle: 'Users', users: users });
});





module.exports = router;