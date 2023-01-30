import AdminCatalog from '../../../crm/admin/catalog';

const Catalog = ({ server_host }) => {
    return (
        <div>
            <h3>Товары</h3>
            <AdminCatalog server_host={server_host} />
        </div>
    );
};

export default Catalog;
