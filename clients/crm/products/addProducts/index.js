import DataProducts from '../../data/products';

const AddProducts = ({ server_host }) => {
    return (
        <>
            <DataProducts server_host={server_host} />
        </>
    );
};

export default AddProducts;
