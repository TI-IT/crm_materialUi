import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';
import CrmDropdown from '../../forma/dropdown/add';
import { Button } from 'primereact/button';
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from '../../../crm/offer/service/NodeService';

const AddOffer = ({ server_host }) => {
    const [value10, setValue10] = useState('');
    const [message, setMessage] = useState('');
    const [selectedNode, setSelectedNode] = useState(null);
    const [treeSelectNodes, setTreeSelectNodes] = useState(null);
    const [titles, setTitles] = React.useState({
        surname: 'Фамилия',
        name: 'Имя',
        patronymic: 'Отчество',
        phone: 'Телефон',
        email: 'Email',
        analiticAddress: 'Откуда о нас узнали?',
        organizations: 'Организация',
        city: 'Город',
        address: 'Адрес проживания',
        notes: 'Примечания'
    });
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
    useEffect(() => {
        const nodeService = new NodeService();
        nodeService.getTreeNodes().then((data) => setTreeSelectNodes(data));
    }, []);

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
            <div className="grid ">
                <div className="col-4">
                    <div className="card">
                        <TreeSelect value={selectedNode} onChange={(e) => setSelectedNode(e.value)} options={treeSelectNodes} placeholder="Select Item"></TreeSelect>
                    </div>
                </div>

                <div className="grid p-fluid text-left">
                    <div className="col-12 md:col-6">
                        <div className="field">
                            <label htmlFor={titles.analiticAddress}>{titles.analiticAddress}</label>
                            <CrmDropdown getData={'analiticAddress'} server_host={server_host} change={crmDropdownGetObject} rerender={setMessage} />
                        </div>

                        <div className="field">
                            <label htmlFor={titles.city}>{titles.city}</label>
                            <CrmDropdown getData={'citys'} server_host={server_host} change={crmDropdownGetObject} rerender={setMessage} />
                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="field">
                            <label htmlFor={titles.organizations}>{titles.organizations}</label>
                            <CrmDropdown getData={'organizations'} server_host={server_host} change={crmDropdownGetObject} rerender={setMessage} />
                        </div>
                        <div className="field">
                            <label htmlFor={titles.notes}>{titles.notes}</label>
                            <InputTextarea id={titles.notes} rows="3" cols="30" value={clients.notes} onChange={(e) => changeClients('notes', e.target.value)} />
                        </div>
                    </div>
                    <div className="text-center">
                        <Button
                            type="button"
                            label="Сохранить"
                            onClick={() => {
                                fetchAddNewAllData();
                            }}
                            icon="pi pi-check"
                            className="bg-green-400 border-white-alpha-10"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddOffer;
