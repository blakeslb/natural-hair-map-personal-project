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

    coords: {
        type: String,
        
    },

    website: {
        type: String
    },
    phone: {
        type: String,
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
  
    twitter: {
        type: String,
    },
    isApproved: {
        type: Boolean,
    }
   
    });

const Stylist = mongoose.model('Stylist', stylistSchema);

module.exports = Stylist;