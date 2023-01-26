const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const TypeProduct = require('../../../models/crm/TypeProduct');

async function saveTypeProduct(data) {
  await dbConnect();
  const collection = mongoose.model('typeProduct');
  await collection.create({
    name: data.name,
  });
}

async function getAllTypeProduct() {
  await dbConnect();
  const collection = mongoose.model('typeProduct');
  const typeProduct = await collection.find({});
  return typeProduct;
}

module.exports = {
  saveTypeProduct,
  getAllTypeProduct,
};
