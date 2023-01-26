const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ProductsData } = require('../../data');
console.log('test777');
const ModelsObject = [];
TypeProduct.map((obj) => {
  console.log(obj);
  if (obj.name === 'typeProduct') {
    console.log(obj);
  }
  ModelsObject.push({
    [obj.name]: {
      type: obj.MongoType,
    },
  });
});

ModelsObject.push({ autoCreate: true });
const schema = new mongoose.Schema({ ModelsObject });
const TypeProduct = mongoose.model('typeProduct', schema);
module.exports = TypeProduct;
