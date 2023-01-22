import React, { useState, useEffect } from 'react';
import { urls } from '../../directory';

function CrmAddData({ server_host, addData }) {
    const [newAddData, setNewAddData] = useState({});
    const [message, setMessage] = useState('');

    async function fetchAddNewData() {
        let fetchUrlRoutes;
        let fetchUrlName;
        let fetchUrlMethod;
        let fethUrl;
        let fethData = {};
        Object.values(urls).map((url) => {
            if (url.name === addData) {
                fetchUrlRoutes = url.routes;
                fetchUrlName = url.name;
                fetchUrlMethod = url.method;
                fethUrl = server_host + '/' + fetchUrlRoutes + '/' + fetchUrlName + '/' + fetchUrlMethod;
                fethData.data = addData;
            }
        });
        console.log(fethUrl);
        const newAddDataObject = {};
        newAddDataObject.name = newAddData;
        console.log(newAddDataObject);
        try {
            const res = await fetch(fethUrl, {
                method: 'post',
                credentials: 'include',
                body: JSON.stringify(newAddDataObject),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            if (data.ok) {
                setMessage('Город добавлен');
                // loadCitys();
            } else {
                setMessage('Ошибка попробуйте другие данные');
            }
        } catch (error) {
            alert('Сервер не отвечает');
        }
    }

    return (
        <>
            <h1>CrmAddData</h1>
            <input type={'text'} name={addData} onChange={(e) => setNewAddData(e.target.value)} value={newAddData.name}></input>
            <div>{message}</div>
            <button type={'button'} onClick={fetchAddNewData}>
                добавить
            </button>
        </>
    );
}

export default CrmAddData;
