const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ClientsData } = require('../../data');

const MapObject = [];
ClientsData.input.map((obj) => {
  MapObject.push({
    [obj.name]: {
      type: obj.MongoType,
    },
  });
});
ClientsData.dropdown.map((obj) => {
  MapObject.push({
    [obj.name]: {
      type: obj.MongoType,
    },
  });
});

MapObject.push({ autoCreate: true });
const schema = new mongoose.Schema({ MapObject });
const Clients = mongoose.model('clients', schema);
module.exports = Clients;
