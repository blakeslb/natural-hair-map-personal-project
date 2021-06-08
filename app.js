require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/index');
require('./config/connection');
const app = express();
const PORT = 3000;
// const bodyParser = require("body-parser");


app.set('view engine', 'ejs');

// Middleware
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));