const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ModelData } = require('../../data');
const ModelsObject = ModelData('AdminCatalogs');
const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const AdminCatalogs = mongoose.model('adminCatalogs', schema);
module.exports = AdminCatalogs;
