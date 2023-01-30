import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';

const TableInput = ({ dbProducts, products, setProducts }) => {
    function changeProducts(name, value) {
        return setProducts({
            ...products,
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
                                    {dbProducts?.input.map((data, _id) => (
                                        <th key={_id}>
                                            <label htmlFor={data.title}>{data.title}</label>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {dbProducts?.input.map((data, _id) => (
                                        <td key={_id}>
                                            <InputText id={data.title} type={data.type} name={data.name} onChange={(e) => changeProducts(data.name, e.target.value)} value={products[data.name]} />
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
