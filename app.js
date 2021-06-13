require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/index');
const app = express();
const session = require('express-session');
const passport = require('passport');
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');

// Middleware
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
app.use(express.json());

app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

const PORT = process.env.PORT || 3000
require('./config/connection');

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));