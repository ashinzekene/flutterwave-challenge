const express = require('express');

const router = express.Router();

router.use('/users', require('./users'))
router.use('/staffs', require('./staffs'))
router.use('/payments', require('./payments'))

module.exports = router;