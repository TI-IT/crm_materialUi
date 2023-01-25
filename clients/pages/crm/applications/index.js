import React, { useState } from 'react';
import ClientsTable from '../../../crm/clients/table';

const Clients = ({ server_host }) => {
    const [message, setMessage] = useState('');
    return (
        <div>
            <h3>Заказы</h3>
            {message}
            <ClientsTable server_host={server_host} rerender={setMessage} />
        </div>
    );
};

export default Clients;
