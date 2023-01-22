import React, { useState } from 'react';
import AddClients from '../../../crm/clients/addClients';

const Clients = ({ server_host }) => {
    return (
        <div>
            <AddClients server_host={server_host} />
        </div>
    );
};

export default Clients;
