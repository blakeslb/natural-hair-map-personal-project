const { response } = require('express');
const Stylist = require('../models/stylistModel')
const User = require("../models/adminModel");

module.exports = {

    //admin page

    admin_get: (request, response) => {
        const admin=request.user.googleId;
        if (request.isAuthenticated() && admin === process.env.GOOGLE_ID) {
            Stylist.find({}, (error, allStylists) => {
                if (error) {
                    return error;
                } else {
                    response.render('pages/admin', { data: allStylists });
                }
            })
        } else {
            response.redirect("/")
        }

    },


    delete: (request, response) => {
        const admin=request.user.googleId;
        if (request.isAuthenticated() && admin === process.env.GOOGLE_ID) {
            const { id } = request.params;
            Stylist.deleteOne({ _id: id }, (error) => {
                if (error) {
                    return error;
                } else {
                    response.redirect('/admin/')
                }
            })
        } else {
            response.redirect('/')
        }
    },
    approve: (request, response) => {
        const admin=request.user.googleId;
        if (request.isAuthenticated() && admin === process.env.GOOGLE_ID) {
            const stylistId = request.params.id;
            Stylist.findOne({ _id: stylistId }, (error, foundStylist) => {
                if (error) {
                    return error;
                } else {
                    response.render('pages/stylist', { stylist: foundStylist });
                }
            })
        } else {
            response.redirect('/')
        }
    },
    approve_put: (request, response) => {
        const admin=request.user.googleId;
        if (request.isAuthenticated() && admin === process.env.GOOGLE_ID) {
        const { id } = request.params;

        Stylist.findByIdAndUpdate(id, {
            $set: {
                fullName: request.body.fullName,
                business_type: request.body.business_type,
                website: request.body.website,
                address: request.body.address,
                coords: request.body.coords,
                phone: request.body.phone,
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
    } else {
    response.redirect("/")
}
    

}
}

