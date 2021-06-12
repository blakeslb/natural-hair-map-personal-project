const passport = require('passport');
const Stylist = require('../models/stylistModel');
const User = require('../Models/userModel');

module.exports = {
    //admin page
    admin_get: (request, response) => {

            Stylist.find({}, (error, allStylists) => {
                if (error) {
                    return error;
                } else {
                    response.render('pages/admin', { data: allStylists });
                }
            })
       
    },

    review_get: (request, response) => {
        response.render('admin-review')
    },

    login: (request, response) => {
        response.render('pages/login');
    },

    // login_post: (request, response) => {
    //     // const user = new User({
    //     //   username: request.body.username,
    //     //   password: request.body.password
    //     // });
      
    //     // request.login(user, (error) => {
    //     //   if (error) {
    //     //     return error;
    //     //   } else {
    //     //     passport.authenticate('local')(request, response, () => {
    //     //       response.redirect('/');
    //     //     });
    //     //   }
    //     // });
    //   },

google_get:
    passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }),

google_redirect_get: [
    passport.authenticate('google', { failureRedirect: 'admin/login' }),
    function (request, response) {
        response.redirect('/admin');
    }],

    // logout: (request, response) => {
    //     request.logout();
    //     response.redirect('admin/login');
    // },

    approve: (request, response) => {

            const stylistId = request.params.id;
            Stylist.findOne({ _id: stylistId }, (error, foundStylist) => {
                if (error) {
                    return error;
                } else {
                    response.render('pages/stylist', { stylist: foundStylist });
                }
            })
        
        
    },
    approve_put: (request, response) => {
        const { id } = request.params;

        Stylist.findByIdAndUpdate(id, {
            $set: {
                fullName: request.body.fullName,
                business_type: request.body.business_type,
                website: request.body.website,
                address: request.body.address,
                coords: request.body.coords,
                phone: request.body.number,
                instagram: request.body.instagram,
                facebook: request.body.facebook,
                tiktok: request.body.tiktok,
                twitter: request.body.twitter,
                isApproved: (request.body.isApproved === "true")

            }
        }, { new: true }, error => {
            if (error) {
                console.log(error)
                return error;
            } else {
                response.redirect('/admin')
                // response.send(request.body);
            }
        })


    }
}

