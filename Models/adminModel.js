const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
 
    },
    password: {
        type: String,
        
        },
    //googleId {
        // type: String
    // }
        

    }
);


module.exports = User;