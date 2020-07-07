const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));
app.use(mainRouter);
  
app.listen(3000); 