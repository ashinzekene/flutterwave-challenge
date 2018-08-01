const express = require('express');

const router = express.Router();

router.use('/users', require('./users'))
router.use('/employees', require('./employees'))
router.use('/payments', require('./payments'))
router.use('/transactions', require('./transactions'))

module.exports = router;