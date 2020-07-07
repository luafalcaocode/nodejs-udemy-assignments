const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/users', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

router.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
});



module.exports = router;