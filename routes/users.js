const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../controllers/user');
const {
  requireAuth
} = require('../utils/auth')()
const { makeUser } = require('../utils')

router.post('/', (req, res) => res.json({ err: 'user post success' }))
router.post('/create', User.create)

router.post('/login', passport.authenticate('local', {
    session: false,
    // failureMessage: 'Invalid username or password....'
  }), User.login);

router.get('/me', requireAuth, (req, res) => {
  console.log('Auth success...')
  res.json(makeUser(req.user))
})

module.exports = router;