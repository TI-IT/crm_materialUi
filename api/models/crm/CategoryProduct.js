const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ModelData } = require('../../data');
const ModelsObject = ModelData('CategoryProduct');
const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const CategoryProduct = mongoose.model('categoryProduct', schema);
module.exports = CategoryProduct;
