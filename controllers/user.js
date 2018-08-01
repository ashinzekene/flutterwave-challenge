const passport = require('passport')
const User = require('../models/user.model.js');
const { signJWT } = require('../utils/auth')()

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
      const { id, username, email, createdAt, updatedAt, password } = user;
      const jwt = signJWT(user.id, user.username);
      res.json({ id, username, email, createdAt, updatedAt, password, jwt });
    })
  },
  login(req, res) {
    const { id, username, email, createdAt, updatedAt, password } = req.user;
    const jwt = signJWT(req.user.id, req.user.username);
    res.json({ id, username, email, createdAt, updatedAt, password, jwt });
  },
  update(req, res, next) {
    const { id, ...update } = req.body;
    User.findByIdAndUpdate(id, update)
      .then(user => {
        res.json(user);
      })
      .catch(error => {
        res.status(400).json({
          error
        })
      })
  },
  addEmployee() {
    return Promise.resolve()
  },
  removeEmployee() {
    return Promise.resolve()
  }
}