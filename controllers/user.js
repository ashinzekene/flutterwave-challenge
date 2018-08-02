const passport = require('passport')
const User = require('../models/user.model.js');
const { signJWT } = require('../utils/auth')()
const { makeUser } = require('../utils')

module.exports = {
  create(req, res) {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    newUser.save((error, user) => {
      if (error) {
        return res.status(400).json(error)
      }
      res.json(makeUser(user));
    })
  },
  login(req, res) {
    res.json(makeUser(req.user));
  },
  update(req, res, next) {
    const { id, ...update } = req.body;
    User.findByIdAndUpdate(id, update)
      .then(user => {
        res.json(makeUser(user));
      })
      .catch(error => {
        res.status(400).json({
          error
        })
      })
  },
}