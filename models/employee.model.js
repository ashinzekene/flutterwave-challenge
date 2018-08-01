const mongoose = require('mongoose');

const { Schema } = mongoose;

const employeeSchema = new Schema({
  avatar_url: String,
  first_name: String,
  last_name: String,
  account_no: String,
  phone_no: String,
  bank_name: String,
  gender: {
    type: String,
    enum: ['male', 'female', 'others']
  },
  email: {
    type: String,
    unique: true,
  },
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
