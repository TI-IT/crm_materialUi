import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import AddClients from '../../clients/addClients';

function FormAddAllData({ server_host, addData, rerender }) {
    console.log(addData);
    const [newAddData, setNewAddData] = useState({});
    const [message, setMessage] = useState('');
    const [displayBasic, setDisplayBasic] = useState(false);
    const button = 'Button';

    const basicDialogFooter = (
        <Button
            type="button"
            label="Сохранить"
            onClick={() => {
                setDisplayBasic(false);
                fetchAddNewData();
            }}
            icon="pi pi-check"
            className="bg-green-400 border-white-alpha-10"
        />
    );

    async function fetchAddNewData() {
        const fethUrl = server_host + '/' + addData + '/addOneData';
        const newAddDataObject = {};
        newAddDataObject.name = newAddData;
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
                rerender();
            } else {
                setMessage('Ошибка попробуйте другие данные');
            }
        } catch (error) {
            alert('Сервер не отвечает');
        }
    }

    return (
        <>
            <Dialog header={'Введите новую ' + addData} visible={displayBasic} style={{ width: '50vw' }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                <AddClients server_host={server_host} />
            </Dialog>
            <Button label="Создать" className="bg-green-400 border-white-alpha-10" type="button" onClick={() => setDisplayBasic(true)} />
        </>
    );
}

export default FormAddAllData;
