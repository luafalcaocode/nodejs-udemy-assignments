const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'users.html'));
});

app.use('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'home.html'));
});

  
app.listen(3000); 