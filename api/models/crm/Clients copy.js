const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Data } = require('../../data');

const MapData = Data?.Clients;
const ModelsObject = {};

MapData.input?.map((obj) => {
  Object.assign(ModelsObject, { [obj.name]: { type: obj.MongoType } });
});
MapData.dropdown?.map((obj) => {
  Object.assign(ModelsObject, { [obj.name]: { type: obj.MongoType } });
});

const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const Clients = mongoose.model('clients', schema);
module.exports = Clients;
