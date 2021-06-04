const { response } = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const markerSchema = new Schema({
    address: {
        type: String
    }  
    
});

const Marker = mongoose.model('Marker', markerSchema);




module.exports = Marker;