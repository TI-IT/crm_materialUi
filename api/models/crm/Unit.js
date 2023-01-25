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

const Unit = mongoose.model('unit', schema);
module.exports = Unit;
