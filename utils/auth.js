const passport = require('passport');
const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');
const User = require('../models/user.model');

const LocalStrategy = require('passport-local').Strategy;

const ExtractJWT = passportJWT.ExtractJwt;

const JWTStrategy = passportJWT.Strategy;

const jwtOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('bearer'),
  secretOrKey: process.env.PASSPORT_SECRET || 'secret',
  expiresIn: '14d',
  // issuer = 'flutterwave_challenge',
  // audience = 'flutterwave_challenge',
};

const requireAuth = passport.authenticate('jwt');

const requireLogin = passport.authenticate('local', {
  session: false
});

function signJWT(id, username) {
  return jwt.sign({
    id,
    username
  }, jwtOptions.secretOrKey, {
    expiresIn: jwtOptions.expiresIn
  });
}

passport.use(new JWTStrategy(jwtOptions, (payload, done) => {
  console.log("Authing user", payload)
  User.findById(payload.id)
    .then(user => done(null, user))
    .catch(err => done)
}));


passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
  function (username, password, cb) {
    //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
    return User.getAuthenticated(username, password, cb)
  }
));



module.exports = (app) => {
  if (app) app.use(passport.initialize());
  return {
    jwtOptions,
    requireAuth,
    signJWT,
  };
};