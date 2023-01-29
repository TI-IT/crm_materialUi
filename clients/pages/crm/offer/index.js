import React, { useState } from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import AddOffer from '../../../crm/applications/table';
import { Link } from 'next/link';

const Applications = ({ server_host }) => {
    const [message, setMessage] = useState('');
    return (
        <>
            <AddOffer server_host={server_host} rerender={setMessage} />
        </>
    );
};

export default Applications;
