const express = require('express');
const router = express.Router();
const User = require('../controllers/user');
const Employee = require('../models/employee.model.js');
// const  } = require('../utils/auth')();

router.post('/create', (req, res) => {
  req.body.employer = req.user && req.user.id || '5b6293e944f7f612533b9b4b';
  Employee.create(req.body)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      res.status(400).json(error)
    })
})

router.post('/remove', (req, res) => {
  Employee.findByIdAndRemove(req.body.id)
    .then(result => {
      res.json(result)
    })
})

router.post('/edit', (req, res) => {
  Employee.findByIdAndRemove(req.body.id)
    .then(employee => {
      res.json(employee);
    })
})

router.get('/all', (req, res) => {
  const id = req.user && req.user.id || '5b6293e944f7f612533b9b4b';
  Employee.find({ employer: id })
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