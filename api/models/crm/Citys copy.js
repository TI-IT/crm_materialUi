const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    name: {
      type: 'String',
    },
  },
  { autoCreate: true },
);

const Citys = mongoose.model('citys', schema);
module.exports = Citys;
