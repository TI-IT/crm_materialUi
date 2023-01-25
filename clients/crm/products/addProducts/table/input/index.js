import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { useRouter } from 'next/router';

const TableInput = ({ dbProducts }) => {
    const [message, setMessage] = useState('');
    const toast = useRef();
    const [clients, setClients] = React.useState({});

    const router = useRouter();

    function changeClients(name, value) {
        return setClients({
            ...clients,
            [name]: value
        });
    }

    return (
        <>
            <div className="card p-fluid">
                <div className="formgrid grid  text-left">
                    <div className="field col ">
                        <table>
                            <thead>
                                <tr>
                                    {dbProducts.input.map((data, _id) => (
                                        <th key={_id}>
                                            <label htmlFor={data.title}>{data.title}</label>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {dbProducts.input.map((data, _id) => (
                                        <td key={_id}>
                                            <InputText id={data.title} type={data.type} name={data.name} onChange={(e) => changeClients(data.name, e.target.value)} value={clients[data.name]} />
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableInput;
