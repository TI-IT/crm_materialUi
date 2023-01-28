const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const Products = require('../../../models/crm/Products');

async function save(data) {
  await dbConnect();
  const collection = mongoose.model('products');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('products');
  const data = await collection.find({});
  return data;
}

async function getAllGoogle() {
  let url =
    'https://script.google.com/macros/s/AKfycbzpzwWIeC6VXM6raZBB8YL08kRZpM2goz3UpKb_x4GLBnhygNroVbDKrQxb0A0feEb8/exec?products=all';
  const data = fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return data;
}

module.exports = {
  save,
  getAll,
  getAllGoogle,
};
