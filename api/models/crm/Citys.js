const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ModelData } = require('../../data');
const ModelsObject = ModelData('Citys');
// console.log(ModelsObject);
const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const Citys = mongoose.model('citys', schema);
module.exports = Citys;
