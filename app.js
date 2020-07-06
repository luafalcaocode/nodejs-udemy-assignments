const express = require('express');
const app = express();

app.use('/users', (request, response, next) => {
    console.log(`Hello! I'm learning Express.js!`);
    response.send({ success: true, message: null});
});

app.use('/', (request, response, next) => {
    console.log(`Express.js is really fun!`);
    response.send({ success: true, message: null });
});


app.listen(3000);