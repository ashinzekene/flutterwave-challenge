const express = require('express');
const router = express.Router();
const Payment = require('../models/payment.model.js');
const { requireAuth } = require('../utils/auth')();

router.post('/create', (req, res) => {
  Payment.create(req.body)
    .then(payment => {
      res.json(payment);
    })
    .catch(error => {
      res.status(400).json(error)
    })
})

router.post('/:id', (req, res) => {
  Payment.findById(req.params.id)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      res.status(400).json(error)
    })
})

module.exports = router;