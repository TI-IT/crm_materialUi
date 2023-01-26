const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Data } = require('../../data');

const CitysData = Data.Clients?.dropdown;
const ModelsObject = {};
CitysData.map((obj) => {
  if (obj.name === 'city') {
    Object.assign(ModelsObject, { name: { type: obj.MongoType } });
  }
});

const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });

const Citys = mongoose.model('citys', schema);
module.exports = Citys;
