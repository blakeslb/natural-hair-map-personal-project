// const { response } = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const stylistSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'A name is required.'],
        minlength: [1, 'Minimun length for the title is 1 characters.']
    },
    business_type: {
        type: String,
    },

    address: {
        type: String,
        required: [true, 'The address is required'],
    },

    website: {
        type: String
    },
    phone: {
        type: String,
        min: [0, 'Minimum length of digits is 10']
    },
    email: {
        type: String
    },
    instagram: {
        type: String
    },
    facebook: {
        type: String
    },
    tiktok: {
        type: String
    },
    twitter: {
        type: String
    }});

const Stylist = mongoose.model('Stylist', stylistSchema);




module.exports = Stylist;