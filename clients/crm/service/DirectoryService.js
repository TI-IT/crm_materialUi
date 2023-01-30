import getConfig from 'next/config';
import { server_host } from '../service/serverHost';

export class DirectoryService {
    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getDirectorysSmall() {
        return fetch(server_host + '/demo/getSmallData', {
            method: 'get',
            credentials: 'include'
        })
            .then((res) => res.json())
            .then((data) => data.data);
    }

    getDirectorys() {
        return fetch(server_host + '/demo/getDirectorys', {
            method: 'get',
            credentials: 'include'
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => data.data);
    }
    getDirectorysWithOrdersSmall() {
        return fetch(server_host + '/demo/directorysOrdersSmall', {
            method: 'get',
            credentials: 'include'
        })
            .then((res) => res.json())
            .then((data) => data.data);
    }
}
