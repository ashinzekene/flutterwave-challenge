const passport = require('passport')
const User = require('../models/user.model.js');

module.exports = {
  create(req, res) {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    newUser.save((error, user) => {
      if (error) {
        res.status(400).json(error)
      }
      res.json(user);
    })
  },

  update(req, res, next) {
    const {
      id,
      ...update
    } = req.body;
    User.findByIdAndUpdate(id, update)
      .then(user => {
        res.json(user);
      })
      .catch(error => {
        res.status(400).json({
          error
        })
      })
  }
}