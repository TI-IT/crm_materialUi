import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Password } from 'primereact/password';
import { CountryService } from '../../../demo/service/CountryService';
import CrmDropdown from '../../crud/get';

const AddClients = ({ server_host }) => {
    const [countries, setCountries] = useState([]);
    const [addSites, setAddSites] = useState('');
    const [value3, setValue3] = useState('');
    const [value1, setValue1] = useState('');
    const [value7, setValue7] = useState(null);
    const [value8, setValue8] = useState(null);
    const [value9, setValue9] = useState(null);
    const [value10, setValue10] = useState('');

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    useEffect(() => {
        const countryService = new CountryService();
        countryService.getCountries().then((countries) => {
            setCountries(countries);
        });
    }, []);

    return (
        <div className="card">
            <h5>Invalid State</h5>
            <div className="grid p-fluid">
                <div className="col-12 md:col-6">
                    <div className="field mt-3">
                        <label htmlFor="inputtext">InputText</label>
                        <InputText type="text" id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} className="p-invalid" />
                    </div>

                    <div className="field">
                        <label htmlFor="calendar">Calendar</label>
                        <Calendar inputId="calendar" value={value3} onChange={(e) => setValue3(e.value)} className="p-invalid" showIcon />
                    </div>
                    <CrmDropdown getData={'citys'} server_host={server_host} />
                </div>

                <div className="col-12 md:col-6">
                    <div className="field">
                        <label htmlFor="inputnumber">InputNumber</label>
                        <InputNumber id="inputnumber" value={value7} onValueChange={(e) => setValue7(e.target.value)} className="p-invalid" />
                    </div>
                    <div className="field">
                        <label htmlFor="dropdown">Dropdown</label>
                        <Dropdown id="dropdown" options={cities} value={value8} onChange={(e) => setValue8(e.value)} optionLabel="name" className="p-invalid" />
                    </div>
                    <div className="field">
                        <label htmlFor="multiselect">MultiSelect</label>
                        <MultiSelect id="multiselect" options={cities} value={value9} onChange={(e) => setValue9(e.value)} optionLabel="name" className="p-invalid" />
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
