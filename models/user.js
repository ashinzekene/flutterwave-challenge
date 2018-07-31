const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const {
  Schema
} = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    minlength: 5
  },
  avatar_url: String,
  first_name: String,
  last_name: String,
  theme: String,
  password: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'others']
  },
  email: {
    type: String,
    unique: true,
  },
  staff: [{
    type: Schema.Types.ObjectId,
    ref: 'Staff',
  }],
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

const User = mongoose.model('User', userSchema);

module.exports = User;