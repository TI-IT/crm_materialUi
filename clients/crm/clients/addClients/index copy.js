import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';
import CrmDropdown from '../../forma/dropdown/add';
import FormaMessages from '../../forma/message';
import { Button } from 'primereact/button';

const AddClients = ({ server_host, rerender, titles, setDisplayBasic }) => {
    const [message, setMessage] = useState('');
    const [clients, setClients] = React.useState({
        surname: '',
        name: '',
        patronymic: '',
        phone: '',
        email: '',
        analiticAddress: '',
        organizations: '',
        citys: '',
        address: '',
        notes: ''
    });

    function changeClients(name, value) {
        return setClients({
            ...clients,
            [name]: value
        });
    }

    function crmDropdownGetObject(name, obj) {
        return setClients({
            ...clients,
            [name]: obj.name
        });
    }

    async function fetchAddNewAllData() {
        const fethUrl = server_host + '/clients/addAllData';
        try {
            const res = await fetch(fethUrl, {
                method: 'post',
                credentials: 'include',
                body: JSON.stringify(clients),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            if (data.ok) {
                setMessage('Клиент добавлен');
            } else {
                setMessage('Ошибка попробуйте другие данные');
            }
        } catch (error) {
            alert('Сервер не отвечает');
        }
    }

    return (
        <>
            <div className="card ">
                <div className="grid p-fluid text-left">
                    <div className="col-12 md:col-6">
                        <div className="field">
                            <label htmlFor={titles.name}>{titles.name}</label>
                            <InputText id={titles.name} type="text" name={'name'} onChange={(e) => changeClients('name', e.target.value)} value={clients.name} className="p-invalid" />
                        </div>

                        <div className="field">
                            <label htmlFor={titles.phone}>{titles.phone}</label>
                            <InputNumber inputId={titles.phone} onChange={(e) => changeClients('phone', e.value)} value={clients.phone} className="p-invalid" />
                        </div>
                        <div className="field">
                            <label htmlFor={titles.analiticAddress}>{titles.analiticAddress}</label>
                            <CrmDropdown getData={'analiticAddress'} server_host={server_host} change={crmDropdownGetObject} rerender={setMessage} />
                        </div>

                        <div className="field">
                            <label htmlFor={titles.city}>{titles.city}</label>
                            <CrmDropdown getData={'citys'} server_host={server_host} change={crmDropdownGetObject} rerender={setMessage} />
                        </div>
                        <div className="field">
                            <label htmlFor={titles.address}>{titles.address}</label>
                            <InputTextarea id={titles.address} rows="3" cols="30" value={clients.address} onChange={(e) => changeClients('address', e.target.value)} />
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="field">
                            <label htmlFor={titles.surname}>{titles.surname}</label>
                            <InputText id={titles.surname} type="text" name={'surname'} onChange={(e) => changeClients('surname', e.target.value)} value={clients.surname} />
                        </div>
                        <div className="field">
                            <label htmlFor={titles.patronymic}>{titles.patronymic}</label>
                            <InputText id={titles.patronymic} type="text" name={'patronymic'} onChange={(e) => changeClients('patronymic', e.target.value)} value={clients.patronymic} />
                        </div>
                        <div className="field">
                            <label htmlFor={titles.email}>{titles.email}</label>
                            <InputText id={titles.email} type="text" name={'email'} onChange={(e) => changeClients('email', e.target.value)} value={clients.email} />
                        </div>
                        <div className="field">
                            <label htmlFor={titles.organizations}>{titles.organizations}</label>
                            <CrmDropdown getData={'organizations'} server_host={server_host} change={crmDropdownGetObject} rerender={setMessage} />
                        </div>
                        <div className="field">
                            <label htmlFor={titles.notes}>{titles.notes}</label>
                            <InputTextarea id={titles.notes} rows="3" cols="30" value={clients.notes} onChange={(e) => changeClients('notes', e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Button
                        type="button"
                        label="Сохранить"
                        onClick={() => {
                            fetchAddNewAllData();
                            rerender('Клиент сохранен');
                            setDisplayBasic(false);
                        }}
                        icon="pi pi-check"
                        className="bg-green-400 border-white-alpha-10"
                    />
                    <FormaMessages />
                </div>
            </div>
        </>
    );
};

export default AddClients;
