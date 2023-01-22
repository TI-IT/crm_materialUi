import React, { useState } from 'react';
import AddClients from '../../../crm/clients/addClients';

const Clients = ({ server_host }) => {
    return (
        <div>
            <h3>Добавить клиента</h3>
            <AddClients server_host={server_host} />
        </div>
    );
};

export default Clients;
