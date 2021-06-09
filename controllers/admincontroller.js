const { response } = require('express');
const Stylist = require('../models/stylistModel');

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

    //about page
    admin_post: (request, response) => {

        
        response.render('pages/about');
    },

    review_get: (request, response) => {
        response.render('admin-review')
    },

    admin_add: (request, response) => {
        response.send('testing my geocode app!')
    },
    approve: (request, response) =>  {
        const stylistId = request.params.id;
        Stylist.findOne({_id: stylistId}, (error, foundStylist) => {
            if(error) {
                return error;
            }else {
                response.render('pages/stylist', { stylist: foundStylist });
            }
        })
    },
    approve_put: (request, response) => {
        const { id } = request.params;

		Stylist.findByIdAndUpdate(id, {$set: {
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
            isApproved: request.body.isApproved

		}}, {new: true}, error => {
			if(error) {
                console.log(error)
				return error; 
			}else {
				response.redirect('/admin')
                // response.send(request.body);
			}
		})


    }
}

