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
      { name: 'categoru', title: 'Категория', type: 'text', MongoType: 'String' },
      { name: 'categoruchildren', title: 'Под категория', type: 'text', MongoType: 'String' },
      { name: 'finishing', title: 'Отделка', type: 'text', MongoType: 'String' },
      { name: 'supplier', title: 'Поставщик', type: 'text', MongoType: 'String' },
      { name: 'unit', title: 'Ед. изм.', type: 'text', MongoType: 'String' },
      { name: 'markup', title: 'Наценка', type: 'number', MongoType: 'Number' },
    ],
  },
  Clients: {
    input: [
      { name: 'surname', title: 'Фамилия', type: 'text', MongoType: 'String' },
      { name: 'name', title: 'Имя', type: 'text', MongoType: 'String' },
      { name: 'patronymic', title: 'Отчество', type: 'text', MongoType: 'String' },
      { name: 'phone', title: 'Телефон', type: 'text', MongoType: 'Number' },
      { name: 'email', title: 'Email', type: 'text', MongoType: 'String' },
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
};

const ModelData = (nameModel = '') => {
  const MapData = Data.nameModel;
  // const MapData = nameModel;
  const ModelsObject = {};
  console.log(MapData);
  // MapData.input?.map((obj) => {
  //   Object.assign(ModelsObject, { [obj.name]: { type: obj.MongoType } });
  // });
  // MapData.dropdown?.map((obj) => {
  //   Object.assign(ModelsObject, { [obj.name]: { type: obj.MongoType } });
  // });

  // return ModelsObject;
};
module.exports = {
  Data,
  ModelData,
};
