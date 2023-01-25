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

const Categoruchildren = mongoose.model('categoruchildren', schema);
module.exports = Categoruchildren;
