const express = require('express');
const router = express.Router();

const siteRouter = require('./siteRouter');
const adminRouter = require('./adminRouter');

router.use('/', siteRouter);
router.use('/admin', adminRouter);

module.exports = router;