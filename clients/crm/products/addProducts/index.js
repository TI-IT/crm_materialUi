import DbData from '../../dbObjects';

const AddProducts = ({ server_host }) => {
    return (
        <>
            <DbData server_host={server_host} />
        </>
    );
};

export default AddProducts;
