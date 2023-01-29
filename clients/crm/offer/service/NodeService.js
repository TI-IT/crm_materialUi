import getConfig from 'next/config';

export class NodeService {
    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getTreeNodes() {
        return fetch(this.contextPath + '/crm/data/treenodes.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.root);
    }

    getTreeTableNodes() {
        return fetch(this.contextPath + '/crm/data/treetablenodes.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.root);
    }
}
