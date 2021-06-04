const { response } = require('express');
const Stylist = require('../models/stylistModel');

module.exports = {




    //admin page

    admin_get: (request, response) => {
        response.render('pages/admin')
    },

    //about page
    admin_post: (request, response) => {
        response.render('pages/about');
    },

    review_get: (request, response) => {
        response.render('admin-review')
    },

    admin_add: (request, response) => {
        response.send('testing my geocode app!')
    }
}

