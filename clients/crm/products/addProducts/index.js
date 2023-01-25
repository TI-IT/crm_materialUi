import DbProducts from '../../dbObjects/products';

const AddProducts = ({ server_host }) => {
    return (
        <>
            <DbProducts server_host={server_host} />
        </>
    );
};

export default AddProducts;
