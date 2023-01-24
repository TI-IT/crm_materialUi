import React, { useState } from 'react';
import AddClients from '../../../crm/clients/addClients';
import ClientsTable from '../../../crm/clients/table';

const Clients = ({ server_host }) => {
    return (
        <div>
            <h3>Добавить клиента</h3>
            <ClientsTable server_host={server_host} />
        </div>
    );
};

export default Clients;
