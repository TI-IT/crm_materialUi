const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ProductsData } = require('../../data');

const MapObject = [];
ProductsData.input.map((obj) => {
  MapObject.push({
    [obj.name]: {
      type: obj.MongoType,
    },
  });
});
ProductsData.dropdown.map((obj) => {
  MapObject.push({
    [obj.name]: {
      type: obj.MongoType,
    },
  });
});

MapObject.push({ autoCreate: true });
const schema = new mongoose.Schema({ MapObject });
const Products = mongoose.model('products', schema);
module.exports = Products;
