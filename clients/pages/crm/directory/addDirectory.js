import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import AddDirectory from '../../../crm/directory/addDirectory/index';
import { useRouter } from 'next/router';

function FormAddAllData({ server_host }) {
    const [displayBasic, setDisplayBasic] = useState(true);
    const router = useRouter();

    const header = <h3>Каталог</h3>;
    const basicDialogFooter = <AddDirectory server_host={server_host} />;

    return (
        <>
            <Dialog
                visible={displayBasic}
                style={{ width: '50vw' }}
                header={header}
                footer={basicDialogFooter}
                onHide={() => {
                    setDisplayBasic(false);
                    router.push('/crm/directory/');
                }}
            ></Dialog>
        </>
    );
}

export default FormAddAllData;
