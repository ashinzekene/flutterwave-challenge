const express = require('express');
const Users = require('../models/user.model')
const router = express.Router();

router.get('/drop', (req, res) => {
  Users.deleteMany({})
    .then(resp => {
      res.json({ err: 'dropped' });
    })
})
router.post('/', (req, res) => res.json({ api: 'post success' }))
router.get('/', (req, res) => res.json({ api: 'api works' }))
router.use('/users', require('./users'))
router.use('/employees', require('./employees'))
router.use('/payments', require('./payments'))
router.use('/transactions', require('./transactions'))

module.exports = router;