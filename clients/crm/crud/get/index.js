import React, { useState, useEffect, useRef } from 'react';
import { urls } from '../../directory';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

function crmDropdown({ server_host, getData, change }) {
    const [getServerData, setGetServerData] = React.useState([]);
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

        await fetch(fethUrl, {
            method: 'get',
            credentials: 'include'
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.ok) {
                    setGetServerData(data.data);
                }
            });
    }

    return (
        <>
            <div className="flex gap-3">
                <div className="w-12">
                    <Dropdown
                        id="dropdown1"
                        options={getServerData}
                        value={value8}
                        onChange={(e) => {
                            setValue8(e.value);
                            change(getData, e.value);
                        }}
                        optionLabel="name"
                        className="p-invalid"
                    />
                </div>
                <Button type="button" className="w-3 pi  pi-plus p-button-success" />
            </div>
        </>
    );
}

export default crmDropdown;
