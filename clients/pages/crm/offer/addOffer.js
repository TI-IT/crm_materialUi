import AddOffer from '../../../crm/offer/addOffer';

import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import AddClients from '../../../crm/clients/addClients';
import { useRouter } from 'next/router';

function FormAddAllData({ server_host }) {
    const [displayBasic, setDisplayBasic] = useState(true);
    const router = useRouter();

    return (
        <>
            <AddOffer server_host={server_host} />
        </>
    );
}

export default FormAddAllData;
