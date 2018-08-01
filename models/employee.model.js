const mongoose = require('mongoose');

const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: String,
  account_no: {
    type:String,
    required: true,
  },
  phone_no: String,
  bank_name: {
    type: String,
    required: true,
  },
  employer: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  pay: Number,
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
