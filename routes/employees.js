const express = require('express');
const router = express.Router();
const User = require('../controllers/user');
const Employee = require('../models/employee.model.js');
const { requireAuth } = require('../utils/auth')();

router.post('/create', requireAuth, (req, res) => {
  req.body.employer = user.id
  Employee.create(req.body)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      res.status(400).json(error)
    })
})

router.post('/remove', requireAuth, (req, res) => {
  Employee.findByIdAndRemove(req.body.id)
    .then(result => {
      res.json(result)
    })
})

router.post('/edit', requireAuth, (req, res) => {
  Employee.findByIdAndRemove(req.body.id)
    .then(employee => {
      res.json(employee);
    })
})

router.get('/all', requireAuth, (req, res) => {
  Employee.find({ employer: req.user.id })
    .then(employees => {
      res.json(employees);
    })
})

router.post('/_all', (req, res) => {
  Employee.find({})
    .then(employees => {
      res.json(employees);
    })
})

module.exports = router;