const express= require('express');
const router = express.Router();
const adminController = require('../controllers/admincontroller');

router.route('/')
    //admin page
    .get(adminController.admin_get)
    //listings submitted by user go here

    router.route('/approve/:id')
    .get(adminController.approve)
    .put(adminController.approve_put)
    .delete(adminController.delete)
    
    module.exports = router; 

    


