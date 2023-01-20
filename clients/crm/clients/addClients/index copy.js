import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import styles from './addClients.module.scss';
import { useRouter } from 'next/router';

const AddClients = ({ server_host }) => {
    const [loading3, setLoading3] = useState(false);
    const onLoadingClick3 = () => {
        setLoading3(true);

        setTimeout(() => {
            setLoading3(false);
        }, 2000);
    };

    const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];
    const [citys, setCitys] = React.useState([]);
    const [addCity, setAddCity] = React.useState({});
    const [hide, sethide] = React.useState(styles.hide);
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
        organization: '',
        city: '',
        address: '',
        notes: ''
    });
    const [message, setMessage] = React.useState('');
    const [disabled, setDisabled] = React.useState(false);
    const router = useRouter('/');

    function changeClients(name, value) {
        setClients({
            ...clients,
            [name]: value
        });
    }

    function changeCity(name, value) {
        setAddCity({
            ...addCity,
            [name]: value
        });
    }

    React.useEffect(loadCitys, []);

    function loadCitys() {
        fetch(server_host + '/directory/citys/get/all', {
            method: 'get',
            credentials: 'include'
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.ok) {
                    setCitys(data.citys);
                }
            });
    }

    async function addClients() {
        setDisabled(true);
        setMessage('');
        if (!clients.name || !clients.phone || !clients.organization) {
            setMessage('Заполните нужные поля поля');
            setDisabled(false);
            return;
        }

        const res = await fetch(server_host + '/clients/add', {
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
            setDisabled(false);
            setClients({
                surname: '',
                name: '',
                patronymic: '',
                phone: '',
                email: '',
                organization: '',
                city: '',
                address: '',
                notes: ''
            });
            router.push('/applications');
        } else {
            setDisabled(false);
            setMessage('Ошибка попробуйте другие данные');
        }
    }

    function displayShow() {
        sethide(styles.show);
    }
    function displayHide() {
        sethide(styles.hide);
    }
    async function directoryAddCity() {
        sethide(styles.hide);
        try {
            const res = await fetch(server_host + '/directory/city/add', {
                method: 'post',
                credentials: 'include',
                body: JSON.stringify(addCity),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            if (data.ok) {
                setMessage('Город добавлен');
                loadCitys();
                setDisabled(false);
            } else {
                setDisabled(false);
                setMessage('Ошибка попробуйте другие данные');
            }
        } catch (error) {
            alert('Сервер не отвечает');
        }
    }

    return (
        <>
            <div className="grid">
                <div className="col-12 md:col-6">
                    <div className="col-12 md:col-6">
                        <div className="card p-fluid">
                            <h5>Horizontal</h5>
                            <div className="field grid">
                                <label htmlFor="name3" className="col-12 mb-2 md:col-2 md:mb-0">
                                    Name
                                </label>
                                <div className="col-12 md:col-10">
                                    <InputText id="name3" type="text" />
                                </div>
                            </div>
                            <div className="field grid">
                                <label htmlFor="email3" className="col-12 mb-2 md:col-2 md:mb-0">
                                    Email
                                </label>
                                <div className="col-12 md:col-10">
                                    <InputText id="email3" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6">
                <div>{message}</div>
                <div className="card">
                    <h5>Advanced</h5>
                    <div className="p-fluid formgrid grid">
                        <div className="field col-12 md:col-6">
                            <label htmlFor={titles.surname}>{titles.surname}</label>
                            <InputText id={titles.surname} type="text" name={'surname'} onChange={(e) => changeClients('surname', e.target.value)} value={clients.surname} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor={titles.name}>{titles.name}</label>
                            <InputText id={titles.name} type="text" name={'name'} onChange={(e) => changeClients('name', e.target.value)} value={clients.name} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor={titles.patronymic}>{titles.patronymic}</label>
                            <InputText id={titles.patronymic} type="text" name={'patronymic'} onChange={(e) => changeClients('patronymic', e.target.value)} value={clients.patronymic} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor={titles.phone}>{titles.phone}</label>
                            <InputText id={titles.phone} type="number" name={'phone'} onChange={(e) => changeClients('phone', e.target.value)} value={clients.phone} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor={titles.email}>{titles.email}</label>
                            <InputText id={titles.email} type="text" name={'email'} onChange={(e) => changeClients('email', e.target.value)} value={clients.email} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor={titles.organization}>{titles.organization}</label>
                            <InputText id={titles.organization} type="text" name={'organization'} onChange={(e) => changeClients('organization', e.target.value)} value={clients.organization} />
                        </div>

                        <div className="field col-12 md:col-3">
                            <label htmlFor="city1">{titles.city}</label>
                            <Dropdown id="city1" value={dropdownItem} onChange={(e) => changeClients('city', e.target.value)} options={citys} optionLabel="city" placeholder="Выберите город"></Dropdown>
                            <Button icon="pi pi-search pi-plus" loading={loading3} onClick={onLoadingClick3} />
                        </div>

                        <div className="field col-12 md:col-6">
                            <label htmlFor="lastname2">Lastname</label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="field col-12">
                            <label htmlFor="address">Address</label>
                            <InputTextarea id="address" rows="4" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="city">City</label>
                            <InputText id="city" type="text" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="state">State</label>
                            <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="zip">Zip</label>
                            <InputText id="zip" type="text" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6">
                <div>{message}</div>
                <div className="card">
                    <h5>Advanced</h5>
                    <div className="p-fluid formgrid grid">
                        <div className="field col-12 md:col-6">
                            <label htmlFor={titles.surname}>{titles.surname}</label>
                            <InputText id={titles.surname} type="text" name={'surname'} onChange={(e) => changeClients('surname', e.target.value)} value={clients.surname} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor={titles.name}>{titles.name}</label>
                            <InputText id={titles.name} type="text" name={'name'} onChange={(e) => changeClients('name', e.target.value)} value={clients.name} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor={titles.patronymic}>{titles.patronymic}</label>
                            <InputText id={titles.patronymic} type="text" name={'patronymic'} onChange={(e) => changeClients('patronymic', e.target.value)} value={clients.patronymic} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor={titles.phone}>{titles.phone}</label>
                            <InputText id={titles.phone} type="number" name={'phone'} onChange={(e) => changeClients('phone', e.target.value)} value={clients.phone} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor={titles.email}>{titles.email}</label>
                            <InputText id={titles.email} type="text" name={'email'} onChange={(e) => changeClients('email', e.target.value)} value={clients.email} />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor={titles.organization}>{titles.organization}</label>
                            <InputText id={titles.organization} type="text" name={'organization'} onChange={(e) => changeClients('organization', e.target.value)} value={clients.organization} />
                        </div>

                        <div className="field col-12 md:col-3">
                            <label htmlFor="city1">{titles.city}</label>

                            <Dropdown id="city1" value={dropdownItem} onChange={(e) => changeClients('city', e.target.value)} options={citys} optionLabel="city" placeholder="Выберите город"></Dropdown>
                            <Button icon="pi pi-search pi-plus" loading={loading3} onClick={onLoadingClick3} />
                        </div>

                        <div className="field col-12 md:col-6">
                            <label htmlFor="lastname2">Lastname</label>
                            <InputText id="lastname2" type="text" />
                        </div>
                        <div className="field col-12">
                            <label htmlFor="address">Address</label>
                            <InputTextarea id="address" rows="4" />
                        </div>
                        <div className="field col-12 md:col-6">
                            <label htmlFor="city">City</label>
                            <InputText id="city" type="text" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="state">State</label>
                            <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="zip">Zip</label>
                            <InputText id="zip" type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddClients;
