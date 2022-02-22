const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const sequelize = require('./config/connection');

const app = express();
const PORT =  process.env.PORT || 3001;

const sess = {
    secret: 'Tech blog secret',
    resave: false,
    saveUninitialized: true,
};

app.use(session(sess));