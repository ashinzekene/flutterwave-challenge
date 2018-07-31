const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../controller/user');

router.post('/create', User.create)

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/login'
}),
function (req, res) {
  res.json({ err: 'Unauthenticated'});
});

module.exports = router;