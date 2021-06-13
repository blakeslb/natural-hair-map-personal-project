const express= require('express');
const router = express.Router();
const siteController = require('../controllers/sitecontroller');


router.route('/')
    .get(siteController.index_get)
    
    router.route('/auth/google')
    .get(siteController.google_get)

router.route('/auth/google/admin')
    .get(siteController.google_redirect_get)

router.route('/about')
    .get(siteController.about_get);

router.route('/contact')
    .get(siteController.contact_get)
//     // .post()

router.route('/add')
    .get(siteController.add)
//     .post(siteController.add_post);
    .post(siteController.add_post);

router.route('/submission-confirmation')
    .get(siteController.confirm);


module.exports = router; 
