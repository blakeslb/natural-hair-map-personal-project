const express= require('express');
const router = express.Router();
const siteController = require('../controllers/sitecontroller');


router.route('/')
    .get(siteController.index_get)
    // .post(siteController.index_post);

// router.route('/:id')
    // .post(siteController.approveListing)
    // .put(siteController.updateListing);

router.route('/about')
    .get(siteController.about_get);

router.route('/contact')
    .get(siteController.contact_get)
//     // .post()

router.route('/add')
    .get(siteController.add)
//     .post(siteController.add_post);
    .post(siteController.add_post);

module.exports = router; 
