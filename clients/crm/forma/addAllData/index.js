import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import AddClients from '../../clients/addClients';

function FormAddAllData({ server_host }) {
    const [displayBasic, setDisplayBasic] = useState(false);

    const basicDialogFooter = <AddClients server_host={server_host} />;

    return (
        <>
            <Dialog visible={displayBasic} style={{ width: '50vw' }} footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}></Dialog>
            <Button label="Создать" className="bg-green-400 border-white-alpha-10" type="button" onClick={() => setDisplayBasic(true)} />
        </>
    );
}

export default FormAddAllData;
