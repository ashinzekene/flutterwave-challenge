const express = require('express');
const router = express.Router();
const User = require('../controllers/user');
const Employee = require('../models/employee.model.js');
const { requireAuth } = require('../utils/auth')();

router.post('/create', requireAuth, (req, res) => {
  Employee.create(req.body)
    .then(employee => User.addEmployee(employee))
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      res.status(400).json(error)
    })
})

router.post('/remove', requireAuth, (req, res) => {
  Employee.findByIdAndRemove(req.body.id)
    .then(employee => User.removeEmployee(employee))
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

module.exports = router;