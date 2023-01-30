const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const AdminProducts = require('../../../models/crm/AdminProducts');

async function save(data) {
  await dbConnect();
  const collection = mongoose.model('adminProducts');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('adminProducts');
  const data = await collection.find({});
  return data;
}

module.exports = {
  save,
  getAll,
};
