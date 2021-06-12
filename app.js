require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const routes = require('./routes/index');
const app = express();
const PORT = 3000;
// const findOrCreate = require('mongoose-findorcreate');

// const bodyParser = require("body-parser");


app.set('view engine', 'ejs');

// Middleware
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
  }))
  
  app.use(passport.initialize());
  app.use(passport.session());

app.use(routes);

require('./config/connection');

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));