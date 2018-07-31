const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  amount: Number,
  transaction_reference: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  account: String,
  description: String,
  status: {
    type: String,
    enum: [ 'approved', 'failed', 'pending' ]
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
