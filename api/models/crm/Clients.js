const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    surname: {
      type: String,
    },
    name: {
      type: String,
    },
    patronymic: {
      type: String,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
    },
    analiticAddress: {
      type: String,
    },
    organizations: {
      type: String,
    },
    citys: {
      type: String,
    },
    address: {
      type: String,
    },
    notes: {
      type: String,
    },
  },
  { autoCreate: true },
);

const Clients = mongoose.model('clients', schema);
module.exports = Clients;
