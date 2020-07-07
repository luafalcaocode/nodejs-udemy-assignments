const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/index');
const parser = require('body-parser');

app.use(parser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(mainRouter);
  
app.listen(3003); 