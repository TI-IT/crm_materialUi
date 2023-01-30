import React, { useState, useEffect } from 'react';
import FetchProducts from '../../admin/products/fetch';

const DataProducts = ({ server_host }) => {
    const [dbData, setDbData] = useState({});

    useEffect(getAllData, []);

    async function getAllData() {
        await fetch(server_host + '/data/getAllData', {
            method: 'get',
            credentials: 'include'
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.ok) {
                    setDbData(data.data);
                }
            });
    }
    return (
        <>
            <FetchProducts server_host={server_host} dbProducts={dbData.Products} />
        </>
    );
};

export default DataProducts;
