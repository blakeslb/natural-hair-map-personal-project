const { response } = require('express');
const Stylist = require('../models/stylistModel');
const passport = require('passport');
const User = require("../models/adminModel");


module.exports = {
  //home page
  index_get: (request, response) => {
    Stylist.find({}, (error, allStylists) => {
      if (error) {
        return error;
    } else {
        response.render('pages/index', { data: allStylists });
    }
    })
  
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
    const newStylist = new Stylist({
      fullName: request.body.fullName,
      business_type: request.body.business_type,
      address: request.body.address,
      website: request.body.website,
      phone: request.body.number,
      email: request.body.email,
      instagram: request.body.instagram,
      twitter: request.body.twitter,
      facebook: request.body.facebook,
      tiktok: request.body.tiktok,
      coords: request.body.coords,
      isApproved: false 
    });
    
    // newStylist.save();
    newStylist.save(function(err){
      if(err){
           console.log(err);
           return;
      }
    })


    response.redirect('/submission-confirmation');

  },

  confirm: (request, response) => {
    response.render('pages/sub-message');
  },

  google_get: 
  passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),

google_redirect_get: [
  passport.authenticate('google', {failureRedirect: '/'}),
  function(request, response) {
    response.redirect('/admin');
}],

admin_add: (request, response) => {
    response.send('testing my geocode app!')
},

}