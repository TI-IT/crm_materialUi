import React, { useState } from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import ApplicationsTable from '../../../crm/applications/table';
import { Link } from 'next/link';

const Applications = ({ server_host }) => {
    const [message, setMessage] = useState('');

    const breadcrumbHome = { icon: 'pi pi-home', to: '/' };
    const breadcrumbItems = [{ label: 'Computer', to: '/crm/clients/' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];

    return (
        <div>
            <div className="col-12">
                <div className="card">
                    <h5>Breadcrumb</h5>
                    <BreadCrumb home={breadcrumbHome} model={breadcrumbItems} />
                </div>
            </div>
            <ApplicationsTable server_host={server_host} rerender={setMessage} />
        </div>
    );
};

export default Applications;
