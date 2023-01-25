import React, { useState } from 'react';
import FetchProducts from '../../products/addProducts/fetch';

const DbProducts = ({ server_host }) => {
    const [dbProducts, setDbProductsDb] = useState({
        input: [
            { name: 'article', title: 'Артикул', type: 'text' },
            { name: 'productName', title: 'Наименование', type: 'text' },
            { name: 'costPrice', title: 'Себестоимость', type: 'text' },
            { name: 'sellingPrice', title: 'Продажная цена', type: 'text' },
            { name: 'linkPhoto', title: 'Сылка на фото', type: 'text' }
        ],
        dropdown: [
            { name: 'typeProduct', title: 'Вид продукта', type: 'text' },
            { name: 'categoru', title: 'Категория', type: 'text' },
            { name: 'categoruchildren', title: 'Под категория', type: 'text' },
            { name: 'finishing', title: 'Отделка', type: 'text' },
            { name: 'supplier', title: 'Поставщик', type: 'text' },
            { name: 'unit', title: 'Ед. изм.', type: 'text' },
            { name: 'markup', title: 'Наценка', type: 'number' }
        ]
    });

    return (
        <>
            <FetchProducts server_host={server_host} dbProducts={dbProducts} />
        </>
    );
};

export default DbProducts;
