
const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');
const app = express();
require('dotenv').config();
// importing routes
const customerRoutes = require('./routes/customer');

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: '',
  user: '',
  password: '',
  port: ,
  database: ''
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
 
});
