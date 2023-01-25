import React, { useState } from 'react';
import AddProducts from '../../../crm/products/addProducts';

const Clients = ({ server_host }) => {
    const [message, setMessage] = useState('');
    return (
        <div>
            <h3>Товары</h3>
            <AddProducts server_host={server_host} />
        </div>
    );
};

export default Clients;
