import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import CrmDropdown from '../../crud/get';
import CrmAddData from '../../crud/add';

const AddClients = ({ server_host }) => {
    const [value3, setValue3] = useState('');
    const [value1, setValue1] = useState('');
    const [value7, setValue7] = useState(null);
    const [value8, setValue8] = useState(null);
    const [value9, setValue9] = useState(null);
    const [value10, setValue10] = useState('');

    const [titles, setTitles] = React.useState({
        surname: 'Фамилия',
        name: 'Имя',
        patronymic: 'Отчество',
        phone: 'Телефон',
        email: 'Email',
        organization: 'Организация',
        city: 'Город',
        address: 'Адрес',
        notes: 'Примечания'
    });
    const [clients, setClients] = React.useState({
        surname: '',
        name: '',
        patronymic: '',
        phone: '',
        email: '',
        organizations: '',
        city: '',
        address: '',
        notes: ''
    });
    function changeClients(name, value) {
        console.log(name, value);
        setClients({
            ...clients,
            [name]: value
        });
    }

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    // useEffect(() => {
    //     const countryService = new CountryService();
    //     countryService.getCountries().then((countries) => {
    //         setCountries(countries);
    //     });
    // }, []);

    return (
        <div className="card">
            <div className="grid p-fluid">
                <div className="col-12 md:col-6">
                    <div className="field">
                        <label htmlFor={titles.name}>{titles.name}</label>
                        <InputText id={titles.name} type="text" name={'name'} onChange={(e) => changeClients('name', e.target.value)} value={clients.name} className="p-invalid" />
                    </div>
                    <div className="field">
                        <label htmlFor={titles.organizations}>{titles.organizations}</label>
                        {/* <InputText id={titles.organizations} type="text" name={'organizations'} onChange={(e) => changeClients('organizations', e.target.value)} value={clients.organization} /> */}
                        <CrmDropdown getData={'organizations'} server_host={server_host} change={changeClients} />
                        <div>{clients.organizations}</div>
                        {/* <CrmAddData addData={'organization'} server_host={server_host} /> */}
                    </div>

                    <div className="field">
                        <label htmlFor="inputtext">InputText</label>
                        <InputText type="text" id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} className="p-invalid" />
                    </div>
                    <div className="field">
                        <label htmlFor="calendar">Calendar</label>
                        <Calendar inputId="calendar" value={value3} onChange={(e) => setValue3(e.value)} className="p-invalid" showIcon />
                    </div>
                    <div className="field">
                        <label htmlFor={titles.phone}>{titles.phone}</label>
                        <InputNumber id={titles.phone} onChange={(e) => changeClients('phone', e.target.value)} value={clients.phone} className="p-invalid" />
                    </div>
                    <div className="field">
                        <label htmlFor={titles.city}>{titles.city}</label>
                        <CrmDropdown getData={'citys'} server_host={server_host} change={changeClients} />
                    </div>
                    {/* <div className="field">
                        <label htmlFor={titles.city}>{titles.city}</label>
                        <CrmAddData addData={'city'} server_host={server_host} />
                    </div> */}
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
                        <label htmlFor="textarea">Textarea</label>
                        <InputTextarea id="textarea" rows="3" cols="30" value={value10} onChange={(e) => setValue10(e.target.value)} className="p-invalid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClients;
