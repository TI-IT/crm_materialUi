import React, { useState, useEffect } from 'react';
import { urls } from '../../directory';

function crmDropdown({ server_host, getData }) {
    const [getServerData, setGetServerData] = React.useState([]);
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
            <h1 onClick={createUrl}>AddOneData777</h1>
            <div>{getServerData}</div>
        </>
    );
}

export default crmDropdown;
