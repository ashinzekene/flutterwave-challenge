const express = require('express');
const router = express.Router();
const Staff = require('../models/staff.model.js');
const { requireAuth } = require('../utils/auth')();

router.post('/create', requireAuth, (req, res) => {
  Staff.create(req.body)
    .then(staff => User.addStaff(staff))
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      res.status(400).json(error)
    })
})

router.post('/remove', requireAuth, (req, res) => {
  Staff.findByIdAndRemove(req.body.id)
    .then(staff => User.removeStaff(staff))
    .then(result => {
      res.json(result)
    })
})

router.post('/edit', requireAuth, (req, res) => {
  Staff.findByIdAndRemove(req.body.id)
    .then(staff => User.removeStaff(staff))
    .then(result => {
      res.json(result)
    })
})

module.exports = router;