import React, { useState, useEffect } from 'react';
import { urls } from '../../directory';
import { Dropdown } from 'primereact/dropdown';

function crmDropdown({ server_host, getData, change }) {
    const [getServerData, setGetServerData] = React.useState([]);
    const [value8, setValue8] = useState(null);

    async function changeData(value) {
        await function (value) {
            setValue8(value);
        };
        if (!value8) {
            console.log('IF');
            console.log(value8);
            setValue8(value);
            changeDataNotNull();
        } else {
            setValue8(value);
            console.log(value8);
        }
    }

    function changeDataNotNull() {
        // setValue8(value2);
        console.log(value8);
        // change(value8);
    }

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
                    setGetServerData(data.data);
                }
            });
    }

    return (
        <>
            <Dropdown
                id="dropdown1"
                options={getServerData}
                value={value8}
                onChange={(e) => {
                    changeData(e.value);
                }}
                optionLabel="name"
                className="p-invalid"
            />
        </>
    );
}

export default crmDropdown;
