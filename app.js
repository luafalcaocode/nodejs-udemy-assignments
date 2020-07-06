const express = require('express');
const app = express();

app.use('/users', (request, response, next) => {
    console.log('/users endpoint callled successfully');
    response.send({ success: true, message: null});
});

app.use('/', (request, response, next) => {
    console.log('/ endpoint called successfuly');
    response.send({ success: true, message: null });
});


app.listen(3000);