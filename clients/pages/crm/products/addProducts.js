import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import AddProducts from '../../../crm/products/addProducts';
import { useRouter } from 'next/router';

function FormAddAllData({ server_host }) {
    const [displayBasic, setDisplayBasic] = useState(true);
    const router = useRouter();
    const header = <h3>Создать товар</h3>;
    const basicDialogFooter = <AddProducts server_host={server_host} />;

    return (
        <>
            <Dialog
                visible={displayBasic}
                style={{ width: '70vw' }}
                header={header}
                footer={basicDialogFooter}
                onHide={() => {
                    setDisplayBasic(false);
                    router.push('/crm/products/');
                }}
            ></Dialog>
        </>
    );
}

export default FormAddAllData;
