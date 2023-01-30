const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
// const Demo = require('../../../models/crm/Demo');

async function save(data) {
  await dbConnect();
  const collection = mongoose.model('demo');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('demo');
  const data = await collection.find({});
  return data;
}
async function directorysOrdersSmall() {
  const data = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      orders: [
        {
          id: '1000',
          productCode: 'f230fh0g3',
          date: '2020-09-13',
          amount: 65,
          quantity: 1,
          customer: 'David James',
          status: 'PENDING',
        },
        {
          id: '1001',
          productCode: 'f230fh0g3',
          date: '2020-05-14',
          amount: 130,
          quantity: 2,
          customer: 'Leon Rodrigues',
          status: 'DELIVERED',
        },
        {
          id: '1002',
          productCode: 'f230fh0g3',
          date: '2019-01-04',
          amount: 65,
          quantity: 1,
          customer: 'Juan Alejandro',
          status: 'RETURNED',
        },
        {
          id: '1003',
          productCode: 'f230fh0g3',
          date: '2020-09-13',
          amount: 195,
          quantity: 3,
          customer: 'Claire Morrow',
          status: 'CANCELLED',
        },
      ],
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4,
      orders: [
        {
          id: '2000',
          productCode: 'nvklal433',
          date: '2020-05-14',
          amount: 72,
          quantity: 1,
          customer: 'Maisha Jefferson',
          status: 'DELIVERED',
        },
        {
          id: '2001',
          productCode: 'nvklal433',
          date: '2020-02-28',
          amount: 144,
          quantity: 2,
          customer: 'Octavia Murillo',
          status: 'PENDING',
        },
      ],
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      image: 'blue-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
      orders: [
        {
          id: '3000',
          productCode: 'zz21cz3c1',
          date: '2020-07-05',
          amount: 79,
          quantity: 1,
          customer: 'Stacey Leja',
          status: 'DELIVERED',
        },
        {
          id: '3001',
          productCode: 'zz21cz3c1',
          date: '2020-02-06',
          amount: 79,
          quantity: 1,
          customer: 'Ashley Wickens',
          status: 'DELIVERED',
        },
      ],
    },
    {
      id: '1003',
      code: '244wgerg2',
      name: 'Blue T-Shirt',
      description: 'Product Description',
      image: 'blue-t-shirt.jpg',
      price: 29,
      category: 'Clothing',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      orders: [],
    },
  ];
  return data;
}
async function getSmallData() {
  const data = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4,
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      image: 'blue-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
    },
  ];
  return data;
}
async function getDirectorys() {
  const data = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4,
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      image: 'blue-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3,
    },
  ];

  return data;
}

module.exports = {
  save,
  getAll,
  getSmallData,
  getDirectorys,
  directorysOrdersSmall,
};
