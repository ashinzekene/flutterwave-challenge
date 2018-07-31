const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  amount: String,
  transaction_reference: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  account: String,
  descriptiom: String,
  status: {
    type: String,
    enum: [ 'approved', 'failed', 'pending' ]
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
