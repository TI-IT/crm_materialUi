import React, { useState, useEffect } from 'react';
import FetchOffer from '../../offer/addOffer/fetch';

const DataOffer = ({ server_host }) => {
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
            <FetchOffer server_host={server_host} dbOffer={dbData.Offer} />
        </>
    );
};

export default DataOffer;
