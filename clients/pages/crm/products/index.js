import ProductsTable from '../../../crm/products/table';

const Clients = ({ server_host }) => {
    return (
        <div>
            <h3>Товары</h3>
            <ProductsTable server_host={server_host} />
        </div>
    );
};

export default Clients;
