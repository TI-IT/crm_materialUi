const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const Products = require('../../../models/crm/Products');
const { ProductsData } = require('../../../data');

// const ModelsObject = [];
// ProductsData.input.map((obj) => ModelsObject.push({ name: obj.name }));
// ProductsData.dropdown.map((obj) => ModelsObject.push({ name: obj.name }));
const data = {
  surname: 'asdfasdfasd',
  name: 'asdfasdfas',
  patronymic: 'asdf',
  phone: 'sdfsdafasdf',
  email: 'sdfasdf',
  analiticAddress: 'asdfs',
  organizations: 'asdfasf',
  citys: 'sadfs',
  address: 'asfds',
  notes: 'asfd',
};
// async function save(data) {

// const dataModels = [];

// ProductsData.input.map((obj) => {
//   dataModels.push({ name: obj.name });
// });

// console.log(dataModels);
//   await dbConnect();
//   const collection = mongoose.model('products');
//   await collection.create({
//     contractor: data.contractor,
//     type: data.type,
//     category: data.category,
//     subCategory: data.subCategory,
//     name: data.name,
//     article: data.article,
//     finishing: data.finishing,
//     unit: data.unit,
//     costPrice: data.costPrice,
//     urlImage: data.urlImage,
//   });
// }

async function getAllProducts() {
  await dbConnect();
  const collection = mongoose.model('products');
  const products = await collection.find({});
  return products;
}

module.exports = {
  // save,
  getAllProducts,
};
