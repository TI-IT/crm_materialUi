import React, { useRef, useState, useEffect, Children } from 'react';
import { useRouter } from 'next/router';
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from '../../service/NodeService';

const TreeSelectCrm = ({ server_host, value }) => {
    const [valueProps, setValueProps] = useState('');
    const [selectedNode, setSelectedNode] = useState(null);
    const [treeSelectNodes, setTreeSelectNodes] = useState(null);
    const [offer, setOffers] = React.useState({});
    const toast = useRef();
    const router = useRouter();

    useEffect(() => {
        const nodeService = new NodeService();
        nodeService.getTreeNodes().then((data) => setTreeSelectNodes(data));
    }, []);
    const array = [];
    if (treeSelectNodes) {
        array.push(
            treeSelectNodes.flatMap(function traverse(el) {
                return [{ key: el.key, label: el.label }].concat(
                    // объединяем значение ключа в текущем элементе
                    el.children?.flatMap(traverse) || [] // с ключами в дочерних
                );
            })
        );
    }
    function createText(data) {
        array.map((i) => {
            i.map((k) => {
                if (k.key === data) {
                    value(k.label);
                }
            });
        });
    }

    async function fetchAddNewAllData() {
        const fethUrl = server_host + '/offer/addAllData';
        try {
            const res = await fetch(fethUrl, {
                method: 'post',
                credentials: 'include',
                body: JSON.stringify(offer),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            if (data.ok) {
                setMessage('Товар создан');
                toast.current.show({ severity: 'success', summary: 'Товар создан', life: 3000 });
            } else {
                setMessage('Ошибка попробуйте другие данные');
            }
        } catch (error) {
            toast.current.show({ severity: 'error', summary: 'Сервер не отвечает', life: 3000 });
        }
    }

    return (
        <>
            <div>
                <h1>TEST</h1>
            </div>
            <TreeSelect
                value={selectedNode}
                onChange={(e) => {
                    setSelectedNode(e.value);
                    createText(e.value);
                }}
                options={treeSelectNodes}
                placeholder="Select Item"
            ></TreeSelect>
        </>
    );
};

export default TreeSelectCrm;
