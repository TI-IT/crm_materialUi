const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const AdminCatalogs = require('../../../models/crm/AdminCatalogs');

async function save(data) {
  await dbConnect();
  const collection = mongoose.model('adminCatalogs');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('adminCatalogs');
  const data = await collection.find({});
  return data;
}

module.exports = {
  save,
  getAll,
};
