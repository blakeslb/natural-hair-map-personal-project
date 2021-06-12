const express= require('express');
const router = express.Router();
const adminController = require('../controllers/admincontroller');


router.route('/')
    //admin page
    .get(adminController.admin_get)
    //listings submitted by user go here

router.route('/login')
    .get(adminController.login)
    // .post(adminController.login_post)
router.route('/auth/google')
    .get(adminController.google_get)


router.route('/auth/google/admin')
    .get(adminController.google_redirect_get)

// router.route('/register')
//     .get(adminController.register)
//     .post(adminController.register_post)

router.route('/approve/:id')
    .get(adminController.approve)
    .put(adminController.approve_put);


 


    module.exports = router; 

    


