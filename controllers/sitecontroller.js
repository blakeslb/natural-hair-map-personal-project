const { response } = require('express');
const Stylist = require('../models/stylistModel');
const Marker = require('../models/markerModel')

module.exports = {
  //home page
  index_get: (request, response) => {

    response.render('pages/index');
  },

  //about page
  about_get: (request, response) => {
    response.render('pages/about');
  },

  //contact page
  contact_get: (request, response) => {
    response.render('pages/contact');
  },

  //submit a listing page
  add: (request, response) => {
    response.render('pages/add');
  },

  add_post: (request, response) => {
    const { fullName, business_type, address, website, phone, email, instagram, facebook, tiktok, twitter } = request.body;
    const newStylist = new Stylist({
      fullName: fullName,
      business_type: business_type,
      address: address,
      website: website,
      phone: phone,
      email: email,
      instagram: instagram,
      twitter: twitter,
      facebook: facebook,
      tiktok: tiktok


    });
    newStylist.save();
    response.redirect('/');

  }
}