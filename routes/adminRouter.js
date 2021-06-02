const express= require('express');
const router = express.Router();
const adminController = require('../controllers/admincontroller');



router.route('/')
    //admin page
    .get(adminController.admin_get)
    //listings submitted by user go here
    .post(adminController.admin_post)

router.route('/review')
    //admin review page (has form)
    .get(adminController.review_get);
    //
    //.put(adminController.review_put);


    module.exports = router; 



