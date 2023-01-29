import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';

const TableInput = ({ dbOffer, offer, setOffers }) => {
    function changeProducts(name, value) {
        return setOffers({
            ...offer,
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
                                    {dbOffer?.input.map((data, _id) => (
                                        <th key={_id}>
                                            <label htmlFor={data.title}>{data.title}</label>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {dbOffer?.input.map((data, _id) => (
                                        <td key={_id}>
                                            <InputText id={data.title} type={data.type} name={data.name} onChange={(e) => changeProducts(data.name, e.target.value)} value={offer[data.name]} />
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
