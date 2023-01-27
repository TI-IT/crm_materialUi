import React, { useState, useEffect } from 'react';
import ClientsTable from '../../clients/table';

const DataClients = ({ server_host }) => {
    const [dbData, setDbData] = useState({});

    useEffect(getAllData, []);
    async function getAllData() {
        const array = [];
        await fetch(server_host + '/data/getAllData', {
            method: 'get',
            credentials: 'include'
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.ok) {
                    data.data.Clients.input?.map((obj) => {
                        array.push(obj);
                    });
                    data.data.Clients.dropdown?.map((obj) => {
                        array.push(obj);
                    });
                    setDbData(array);
                }
            });
    }

    return (
        <>
            <ClientsTable server_host={server_host} dbClient={dbData} getAllData={getAllData} />
        </>
    );
};

export default DataClients;
