import AdminProducts from '../../../crm/admin/products';

const Product = ({ server_host }) => {
    return (
        <div>
            <h3>Товары</h3>
            <AdminProducts server_host={server_host} />
        </div>
    );
};

export default Product;
