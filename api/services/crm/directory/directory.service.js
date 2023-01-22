const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const Citys = require('../../../models/crm/Citys');

async function saveCity(data) {
  await dbConnect();
  const collection = mongoose.model('citys');
  await collection.create({
    name: data.name,
  });
}

async function getAllCitys() {
  await dbConnect();
  const collection = mongoose.model('citys');
  const citys = await collection.find({});
  return citys;
}

// async function getAllCitys() {
//   let arrayData = [];
//   let arrayCitys = [];
//   await dbConnect();
//   const collection = mongoose.model('directory');
//   const citys = await collection.find({});
//   citys.map((obj) => {
//     arrayData.push(Object.values(obj)[2]);
//   });
//   Object.values(arrayData).map((i) => {
//     if (Object.keys(i)[1] === 'citys') arrayCitys.push(Object.values(i)[1]);
//   });
//   return arrayCitys;
// }

module.exports = {
  saveCity,
  getAllCitys,
};
