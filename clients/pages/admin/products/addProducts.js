import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import DataProducts from '../../../crm/data/products';
import { useRouter } from 'next/router';

function FormAddAllData({ server_host }) {
    const [displayBasic, setDisplayBasic] = useState(true);
    const router = useRouter();
    const header = <h3>Создать товар</h3>;
    const basicDialogFooter = <DataProducts server_host={server_host} />;

    return (
        <>
            <Dialog
                visible={displayBasic}
                style={{ width: '70vw' }}
                header={header}
                footer={basicDialogFooter}
                onHide={() => {
                    setDisplayBasic(false);
                    router.push('/admin/products/');
                }}
            ></Dialog>
        </>
    );
}

export default FormAddAllData;
