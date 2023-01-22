import React, { useState, useEffect } from 'react';
import { urls } from '../../directory';
import { Dropdown } from 'primereact/dropdown';

function crmDropdown({ server_host, getData }) {
    // const getServerData = [{ name: 'New York' }, { name: 'Rome' }, { name: 'London' }, { name: 'Istanbul' }, { name: 'Paris' }];
    const [getServerData, setGetServerData] = React.useState([{ name: 'New York' }]);
    const [value8, setValue8] = useState(null);

    useEffect(createUrl, []);

    async function createUrl() {
        let fetchUrlRoutes;
        let fetchUrlName;
        let fetchUrlMethod;
        let fethUrl;
        let fethData = {};
        Object.values(urls).map((url) => {
            if (url.name === getData) {
                fetchUrlRoutes = url.routes;
                fetchUrlName = url.name;
                fetchUrlMethod = url.method;
                fethUrl = server_host + '/' + fetchUrlRoutes + '/' + fetchUrlName + '/' + fetchUrlMethod;
                fethData.data = getData;
            }
        });

        fetch(fethUrl, {
            method: 'get',
            credentials: 'include'
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.ok) {
                    console.log(data.data);
                    setGetServerData(data.data);
                }
            });
        // alert(getServerData);
    }

    return (
        <>
            <h1>AddOneData777</h1>

            <div className="field">
                <label htmlFor="dropdown1">выбрать город</label>
                {/* <div>{getServerData}</div> */}
                <Dropdown id="dropdown1" options={getServerData} value={value8} onClick={createUrl} onChange={(e) => setValue8(e.value)} optionLabel="name" className="p-invalid" />
            </div>
        </>
    );
}

export default crmDropdown;
