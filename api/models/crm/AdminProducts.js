const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ModelData } = require('../../data');
const ModelsObject = ModelData('AdminProducts');
const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const AdminProducts = mongoose.model('adminProducts', schema);
module.exports = AdminProducts;
