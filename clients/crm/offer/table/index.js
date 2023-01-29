import React, { useState, useEffect, useRef } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { CustomerService } from '../../../demo/service/CustomerService';
import { ProductService } from '../../../demo/service/ProductService';
import getConfig from 'next/config';
import FormAddAllData from '../../forma/addAllData';
import { useRouter } from 'next/router';

const ApplicationsTable = ({ server_host }) => {
    const [customers1, setCustomers1] = useState(null);
    const [customers2, setCustomers2] = useState([]);
    const [customers3, setCustomers3] = useState([]);
    const [filters1, setFilters1] = useState(null);
    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [idFrozen, setIdFrozen] = useState(false);
    const [products, setProducts] = useState([]);
    const [globalFilterValue1, setGlobalFilterValue1] = useState('');
    const [expandedRows, setExpandedRows] = useState(null);
    const [allExpanded, setAllExpanded] = useState(false);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const router = useRouter();
    const customerService = new CustomerService();
    const productService = new ProductService();

    useEffect(() => {
        setLoading2(true);

        customerService.getCustomersLarge().then((data) => {
            setCustomers1(getCustomers(data));
            setLoading1(false);
        });
        customerService.getCustomersLarge().then((data) => {
            setCustomers2(getCustomers(data));
            setLoading2(false);
        });
        customerService.getCustomersMedium().then((data) => setCustomers3(data));
        productService.getProductsWithOrdersSmall().then((data) => setProducts(data));

        initFilters1();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);
            return d;
        });
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const initFilters1 = () => {
        setFilters1({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            representative: { value: null, matchMode: FilterMatchMode.IN },
            date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
            balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
            verified: { value: null, matchMode: FilterMatchMode.EQUALS }
        });
        setGlobalFilterValue1('');
    };

    const toggleAll = () => {
        if (allExpanded) collapseAll();
        else expandAll();
    };

    const expandAll = () => {
        let _expandedRows = {};
        products.forEach((p) => (_expandedRows[`${p.id}`] = true));

        setExpandedRows(_expandedRows);
        setAllExpanded(true);
    };

    const collapseAll = () => {
        setExpandedRows(null);
        setAllExpanded(false);
    };

    const amountBodyTemplate = (rowData) => {
        return formatCurrency(rowData.amount);
    };

    const statusOrderBodyTemplate = (rowData) => {
        return <span className={`order-badge order-${rowData.status.toLowerCase()}`}>{rowData.status}</span>;
    };

    const searchBodyTemplate = () => {
        return <Button icon="pi pi-search" />;
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={`${contextPath}/demo/images/product/${rowData.image}`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={rowData.image} className="shadow-2" width={100} />;
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate2 = (rowData) => {
        return <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
    };

    const rowExpansionTemplate = (data) => {
        return (
            <div className="orders-subtable">
                <h5>Orders for {data.name}</h5>
                <DataTable value={data.orders} responsiveLayout="scroll">
                    <Column field="id" header="Id" sortable></Column>
                    <Column field="customer" header="Customer" sortable></Column>
                    <Column field="date" header="Date" sortable></Column>
                    <Column field="amount" header="Amount" body={amountBodyTemplate} sortable></Column>
                    <Column field="status" header="Status" body={statusOrderBodyTemplate} sortable></Column>
                    <Column headerStyle={{ width: '4rem' }} body={searchBodyTemplate}></Column>
                </DataTable>
            </div>
        );
    };

    const header = (
        <div className="grid">
            <div className=" mr-3">
                <Button icon={allExpanded ? 'pi pi-minus' : 'pi pi-plus'} label={allExpanded ? 'Collapse All' : 'Expand All'} onClick={toggleAll} className="w-11rem" />
            </div>
            <Button label="КП" className="bg-green-400 border-white-alpha-10" type="button" onClick={() => router.push('/crm/offer/addOffer')} />
        </div>
    );

    return (
        <div className="grid">
            <div className="col-12">
                <h5>Клиенты</h5>
                <DataTable value={products} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)} responsiveLayout="scroll" rowExpansionTemplate={rowExpansionTemplate} dataKey="id" header={header}>
                    <Column expander style={{ width: '3em' }} />
                    <Column field="name" header="Name" sortable />
                    <Column header="Image" body={imageBodyTemplate} />
                    <Column field="price" header="Price" sortable body={priceBodyTemplate} />
                    <Column field="category" header="Category" sortable />
                    <Column field="rating" header="Reviews" sortable body={ratingBodyTemplate} />
                    <Column field="inventoryStatus" header="Status" sortable body={statusBodyTemplate2} />
                </DataTable>
            </div>
        </div>
    );
};

export default ApplicationsTable;
