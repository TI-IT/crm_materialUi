import getConfig from 'next/config';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { FileUpload } from 'primereact/fileupload';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { Rating } from 'primereact/rating';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import { classNames } from 'primereact/utils';
import React, { useEffect, useRef, useState } from 'react';
import { DirectoryService } from '../../service/DirectoryService';

const DirectoryTable = ({ server_host }) => {
    let emptyDirectory = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };

    const [directorys, setDirectorys] = useState(null);
    const [directoryDialog, setDirectoryDialog] = useState(false);
    const [deleteDirectoryDialog, setDeleteDirectoryDialog] = useState(false);
    const [deleteDirectorysDialog, setDeleteDirectorysDialog] = useState(false);
    const [directory, setDirectory] = useState(emptyDirectory);
    const [selectedDirectorys, setSelectedDirectorys] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        const directoryService = new DirectoryService();
        directoryService.getDirectorys().then((data) => setDirectorys(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const openNew = () => {
        setDirectory(emptyDirectory);
        setSubmitted(false);
        setDirectoryDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setDirectoryDialog(false);
    };

    const hideDeleteDirectoryDialog = () => {
        setDeleteDirectoryDialog(false);
    };

    const hideDeleteDirectorysDialog = () => {
        setDeleteDirectorysDialog(false);
    };

    const saveDirectory = () => {
        setSubmitted(true);

        if (directory.name.trim()) {
            let _directorys = [...directorys];
            let _directory = { ...directory };
            if (directory.id) {
                const index = findIndexById(directory.id);

                _directorys[index] = _directory;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Directory Updated', life: 3000 });
            } else {
                _directory.id = createId();
                _directory.code = createId();
                _directory.image = 'directory-placeholder.svg';
                _directorys.push(_directory);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Directory Created', life: 3000 });
            }

            setDirectorys(_directorys);
            setDirectoryDialog(false);
            setDirectory(emptyDirectory);
        }
    };

    const editDirectory = (directory) => {
        setDirectory({ ...directory });
        setDirectoryDialog(true);
    };
    const createDirectoryData = (directory) => {
        setDirectory({ ...directory });
        setDirectoryDialog(true);
    };

    const confirmDeleteDirectory = (directory) => {
        setDirectory(directory);
        setDeleteDirectoryDialog(true);
    };

    const deleteDirectory = () => {
        let _directorys = directorys.filter((val) => val.id !== directory.id);
        setDirectorys(_directorys);
        setDeleteDirectoryDialog(false);
        setDirectory(emptyDirectory);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Directory Deleted', life: 3000 });
    };

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < directorys.length; i++) {
            if (directorys[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    };

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteDirectorysDialog(true);
    };

    const deleteSelectedDirectorys = () => {
        let _directorys = directorys.filter((val) => !selectedDirectorys.includes(val));
        setDirectorys(_directorys);
        setDeleteDirectorysDialog(false);
        setSelectedDirectorys(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Directorys Deleted', life: 3000 });
    };

    const onCategoryChange = (e) => {
        let _directory = { ...directory };
        _directory['category'] = e.value;
        setDirectory(_directory);
    };

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _directory = { ...directory };
        _directory[`${name}`] = val;

        setDirectory(_directory);
    };

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _directory = { ...directory };
        _directory[`${name}`] = val;

        setDirectory(_directory);
    };

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div className="my-2">
                    <Button label="New" icon="pi pi-plus" className="p-button-success mr-2" onClick={openNew} />
                    <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={confirmDeleteSelected} disabled={!selectedDirectorys || !selectedDirectorys.length} />
                </div>
            </React.Fragment>
        );
    };

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} label="Import" chooseLabel="Import" className="mr-2 inline-block" />
                <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />
            </React.Fragment>
        );
    };

    const codeBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Code</span>
                {rowData.code}
            </>
        );
    };

    const nameBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Name</span>
                {rowData.name}
            </>
        );
    };

    const imageBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Image</span>
                <img src={`${contextPath}/demo/images/directory/${rowData.image}`} alt={rowData.image} className="shadow-2" width="100" />
            </>
        );
    };

    const priceBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Price</span>
                {formatCurrency(rowData.price)}
            </>
        );
    };

    const categoryBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Category</span>
                {rowData.category}
            </>
        );
    };

    const ratingBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Reviews</span>
                <Rating value={rowData.rating} readOnly cancel={false} />
            </>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Status</span>
                <span className={`directory-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>
            </>
        );
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Button icon="pi pi-plus" className="p-button-rounded p-button-success mr-2" onClick={() => createDirectoryData(rowData)} />
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editDirectory(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning mr-2" onClick={() => confirmDeleteDirectory(rowData)} />
            </>
        );
    };

    const header = (
        <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
            <h5 className="m-0">Manage Directorys</h5>
            <span className="block mt-2 md:mt-0 p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const directoryDialogFooter = (
        <>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveDirectory} />
        </>
    );
    const deleteDirectoryDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteDirectoryDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteDirectory} />
        </>
    );
    const deleteDirectorysDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteDirectorysDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedDirectorys} />
        </>
    );

    return (
        <div className="grid crud-demo">
            <div className="col-12">
                <div className="card">
                    <Toast ref={toast} />
                    <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                    <DataTable
                        ref={dt}
                        value={directorys}
                        selection={selectedDirectorys}
                        onSelectionChange={(e) => setSelectedDirectorys(e.value)}
                        dataKey="id"
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 25]}
                        className="datatable-responsive"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} directorys"
                        globalFilter={globalFilter}
                        emptyMessage="No directorys found."
                        header={header}
                        responsiveLayout="scroll"
                    >
                        {/* <Column selectionMode="multiple" headerStyle={{ width: '4rem' }}></Column> */}
                        <Column field="code" header="Code" sortable body={codeBodyTemplate} headerStyle={{ minWidth: '15rem' }}></Column>
                        <Column field="name" header="Name" sortable body={nameBodyTemplate} headerStyle={{ minWidth: '15rem' }}></Column>
                        {/* <Column header="Image" body={imageBodyTemplate}></Column> */}
                        <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                        <Column field="category" header="Category" sortable body={categoryBodyTemplate} headerStyle={{ minWidth: '10rem' }}></Column>
                        <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable></Column>
                        <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable headerStyle={{ minWidth: '10rem' }}></Column>
                        <Column body={actionBodyTemplate} headerStyle={{ minWidth: '10rem' }}></Column>
                    </DataTable>

                    <Dialog visible={directoryDialog} style={{ width: '450px' }} header="Directory Details" modal className="p-fluid" footer={directoryDialogFooter} onHide={hideDialog}>
                        {directory.image && <img src={`${contextPath}/demo/images/directory/${directory.image}`} alt={directory.image} width="150" className="mt-0 mx-auto mb-5 block shadow-2" />}
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <InputText id="name" value={directory.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !directory.name })} />
                            {submitted && !directory.name && <small className="p-invalid">Name is required.</small>}
                        </div>
                        <div className="field">
                            <label htmlFor="description">Description</label>
                            <InputTextarea id="description" value={directory.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                        </div>

                        <div className="field">
                            <label className="mb-3">Category</label>
                            <div className="formgrid grid">
                                <div className="field-radiobutton col-6">
                                    <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={directory.category === 'Accessories'} />
                                    <label htmlFor="category1">Accessories</label>
                                </div>
                                <div className="field-radiobutton col-6">
                                    <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={directory.category === 'Clothing'} />
                                    <label htmlFor="category2">Clothing</label>
                                </div>
                                <div className="field-radiobutton col-6">
                                    <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={directory.category === 'Electronics'} />
                                    <label htmlFor="category3">Electronics</label>
                                </div>
                                <div className="field-radiobutton col-6">
                                    <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={directory.category === 'Fitness'} />
                                    <label htmlFor="category4">Fitness</label>
                                </div>
                            </div>
                        </div>

                        <div className="formgrid grid">
                            <div className="field col">
                                <label htmlFor="price">Price</label>
                                <InputNumber id="price" value={directory.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                            </div>
                            <div className="field col">
                                <label htmlFor="quantity">Quantity</label>
                                <InputNumber id="quantity" value={directory.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} integeronly />
                            </div>
                        </div>
                    </Dialog>

                    <Dialog visible={deleteDirectoryDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteDirectoryDialogFooter} onHide={hideDeleteDirectoryDialog}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                            {directory && (
                                <span>
                                    Are you sure you want to delete <b>{directory.name}</b>?
                                </span>
                            )}
                        </div>
                    </Dialog>

                    <Dialog visible={deleteDirectorysDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteDirectorysDialogFooter} onHide={hideDeleteDirectorysDialog}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                            {directory && <span>Are you sure you want to delete the selected directorys?</span>}
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default DirectoryTable;
