const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { autoCreate: true },
);

const Supplier = mongoose.model('supplier', schema);
module.exports = Supplier;
