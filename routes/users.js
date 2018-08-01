const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../controllers/user');
const {
  requireAuth
} = require('../utils/auth')()

router.post('/create', User.create)

router.post('/login', passport.authenticate('local', {
    session: false,
    // failureMessage: 'Invalid username or password....'
  }), User.login);

router.get('/protected', (req, res, next) => {
  console.log('Headers ==>', req.headers)
  next()
} , requireAuth, (req, res) => {
  console.log('Auth success...')
  res.json(req.user)
})

module.exports = router;