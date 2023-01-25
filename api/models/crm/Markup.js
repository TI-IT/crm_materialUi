const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    name: {
      type: Number,
    },
  },
  { autoCreate: true },
);

const Markup = mongoose.model('markup', schema);
module.exports = Markup;
