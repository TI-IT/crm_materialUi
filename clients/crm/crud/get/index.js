import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { CountryService } from '../../demo/service/CountryService';
import { Directory } from '../../directory';

const getCitys = ({ server_host }) => {
    alert(Directory);
    return (
        <>
            <h1>Cityes</h1>
        </>
    );
};
AddCitys;
const AddCitys = ({ addSites, setAddSites }) => {
    const [countries, setCountries] = useState([]);
    const [value1, setValue1] = useState('');
    const [value3, setValue3] = useState('');
    const [value6, setValue6] = useState('');
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
        <div className="field">
            <label htmlFor="dropdown">Dropdown</label>
            <Dropdown id="dropdown" options={cities} value={addSites} onChange={(e) => setValue8(e.value)} optionLabel="name" className="p-invalid" />
        </div>
    );
};

export { getCitys, AddCitys };
