const Data = {
  Products: {
    input: [
      { name: 'article', title: 'Артикул', type: 'text', MongoType: 'String' },
      { name: 'productName', title: 'Наименование', type: 'text', MongoType: 'String' },
      { name: 'costPrice', title: 'Себестоимость', type: 'text', MongoType: 'String' },
      { name: 'sellingPrice', title: 'Продажная цена', type: 'text', MongoType: 'String' },
      { name: 'linkPhoto', title: 'Сылка на фото', type: 'text', MongoType: 'String' },
    ],
    dropdown: [
      { name: 'typeProduct', title: 'Вид продукта', type: 'text', MongoType: 'String' },
      { name: 'categoryProduct', title: 'Категория', type: 'text', MongoType: 'String' },
      {
        name: 'categoryChildrenProduct',
        title: 'Под категория',
        type: 'text',
        MongoType: 'String',
      },
      { name: 'finishingProduct', title: 'Отделка', type: 'text', MongoType: 'String' },
      { name: 'supplierProduct', title: 'Поставщик', type: 'text', MongoType: 'String' },
      { name: 'unit', title: 'Ед. изм.', type: 'text', MongoType: 'String' },
      { name: 'markup', title: 'Наценка', type: 'number', MongoType: 'Number' },
    ],
  },
  Clients: {
    input: [
      { name: 'surname', title: 'Фамилия', type: 'text', MongoType: 'String' },
      { name: 'name', title: 'Имя', type: 'text', MongoType: 'String' },
      { name: 'patronymic', title: 'Отчество', type: 'text', MongoType: 'String' },
      { name: 'phone', title: 'Телефон', type: 'text', MongoType: 'Number', MongoUnique: true },
      {
        name: 'email',
        title: 'Email',
        type: 'text',
        MongoType: 'String',
        MongoUnique: true,
      },
      { name: 'address', title: 'Адрес проживания', type: 'text', MongoType: 'String' },
      { name: 'notes', title: 'Примечания', type: 'text', MongoType: 'String' },
    ],
    dropdown: [
      {
        name: 'analiticAddress',
        title: 'Откуда о нас узнали?',
        type: 'text',
        MongoType: 'String',
      },
      { name: 'organizations', title: 'Организация', type: 'text', MongoType: 'String' },
      { name: 'city', title: 'Город', type: 'text', MongoType: 'String' },
    ],
  },
  Citys: {
    input: [
      {
        name: 'city',
        title: 'Город',
        type: 'text',
        MongoType: 'String',
        MongoUnique: true,
        MongoRequire: true,
      },
    ],
  },
  TypeProduct: {
    dropdown: [
      {
        name: 'name',
        title: 'Вид продукта',
        type: 'text',
        MongoType: 'String',
        MongoUnique: true,
        MongoRequire: true,
      },
    ],
  },
  CategoryProduct: {
    dropdown: [
      {
        name: 'name',
        title: 'Вид продукта',
        type: 'text',
        MongoType: 'String',
        MongoUnique: true,
        MongoRequire: true,
      },
    ],
  },
  CategoryChildrenProduct: {
    dropdown: [
      {
        name: 'name',
        title: 'Вид продукта',
        type: 'text',
        MongoType: 'String',
        MongoUnique: true,
        MongoRequire: true,
      },
    ],
  },
  FinishingProduct: {
    dropdown: [
      {
        name: 'name',
        title: 'Вид продукта',
        type: 'text',
        MongoType: 'String',
        MongoUnique: true,
        MongoRequire: true,
      },
    ],
  },
  SupplierProduct: {
    dropdown: [
      {
        name: 'name',
        title: 'Вид продукта',
        type: 'text',
        MongoType: 'String',
        MongoUnique: true,
        MongoRequire: true,
      },
    ],
  },
  Unit: {
    dropdown: [
      {
        name: 'name',
        title: 'Вид продукта',
        type: 'text',
        MongoType: 'String',
        MongoUnique: true,
        MongoRequire: true,
      },
    ],
  },
  Markup: {
    dropdown: [
      {
        name: 'name',
        title: 'Вид продукта',
        type: 'text',
        MongoType: 'String',
        MongoUnique: true,
        MongoRequire: true,
      },
    ],
  },
};

const ModelData = (nameModel) => {
  const ModelsObject = {};
  if (Data[nameModel]) {
    Data[nameModel].input?.map((obj) => {
      const createObj = {};
      if (obj['MongoType']) {
        Object.assign(createObj, {
          type: obj.MongoType,
        });
      }
      if (obj['MongoUnique']) {
        Object.assign(createObj, {
          unique: obj.MongoUnique,
        });
      }
      if (obj['MongoRequire']) {
        Object.assign(createObj, {
          require: obj.MongoUnique,
        });
      }
      Object.assign(ModelsObject, { [obj.name]: createObj });
    });
    Data[nameModel].dropdown?.map((obj) => {
      const createObj = {};
      if (obj['MongoType']) {
        Object.assign(createObj, {
          type: obj.MongoType,
        });
      }
      if (obj['MongoUnique']) {
        Object.assign(createObj, {
          unique: obj.MongoUnique,
        });
      }
      if (obj['MongoRequire']) {
        Object.assign(createObj, {
          require: obj.MongoUnique,
        });
      }
      Object.assign(ModelsObject, { [obj.name]: createObj });
    });
  } else {
    console.log('Ошибка в Data Название Объекта не существует!');
    return;
  }
  return ModelsObject;
};

module.exports = {
  Data,
  ModelData,
};
