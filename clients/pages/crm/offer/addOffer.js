import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DataOffer from '../../../crm/data/offer';

function FormAddAllData({ server_host }) {
    // const [displayBasic, setDisplayBasic] = useState(true);
    const router = useRouter();

    return (
        <>
            <DataOffer server_host={server_host} />
        </>
    );
}
export default FormAddAllData;
