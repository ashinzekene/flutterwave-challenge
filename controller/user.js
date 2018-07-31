const passport = require('passport')
const User = require('../models/user.model.js');

module.exports = {
  create(req, res, next) {
    router.post('/login', function (req, res, next) {
      passport.authenticate('local', {
        session: false
      }, (err, user, info) => {
        if (err || !user) {
          return res.status(400).json({
            message: 'Something is not right',
            user: user
          });
        }
        req.login(user, {
          session: false
        }, (err) => {
          if (err) {
            res.send(err);
          }
          // generate a signed son web token with the contents of user object and return it in the response
          const token = jwt.sign(user, 'your_jwt_secret');
          return res.json({
            user,
            token
          });
        });
      })(req, res);
    });
  },
  update(req, res, next) {
    const {id, ...update} = req.body;
    User.findByIdAndUpdate(id, update)
      .then(user => {
        res.json(user);
      })
      .catch(error => {
        res.status(400).json({ error })
      })
  }
}