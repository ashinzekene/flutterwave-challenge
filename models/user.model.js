const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const {
  Schema
} = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    minlength: 5
  },
  avatar_url: String,
  first_name: String,
  last_name: String,
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'others']
  },
  email: {
    type: String,
    unique: true,
  },
}, {
  timestamps: true
});

UserSchema.pre('save', function (next) {
  var user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

UserSchema.statics.getAuthenticated = function (username, password, cb) {
  this.findOne({
    username: username
  }, function (err, user) {
    if (err) return cb(err);
    // making sure the user exists
    if (!user) {
      console.log('No user found');
      return cb(null, false, { message: 'Username or password incorrect' });
    }
    // testing for a matching password
    user.comparePassword(password, function (err, isMatch) {
      if (err) return cb(err);
      // check if the password was a match
      if (isMatch) {
        return cb(null, user);
      }
      // password is incorrect
      console.log('Incorrect password');
      return cb(null, false, { message: 'Username or password incorrect' });
    });
  });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;