const mongoose = require('mongoose');
const { Schema } = mongoose;
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');


const userSchema = new Schema({
    username: {
        type: String,
 
    },
    password: {
        type: String,     
        },
    googleId: {
        type: String
        }
    }
);


userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema)
passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "https://localhost:3000/admin"
},
    function (accessToken, refreshToken, email, cb) {
        console.log(email);
        User.findOrCreate({ googleId: email.id, username: email.displayName }, function (err, user) {
            return cb(err, user);
        });
    }
));

module.exports = User;