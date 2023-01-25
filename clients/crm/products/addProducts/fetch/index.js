import TableDropdown from '../table/dropdown';
import TableInput from '../table/input';

const FetchProducts = ({ server_host, dbProducts }) => {
    return (
        <>
            <TableDropdown server_host={server_host} dbProducts={dbProducts} />
            <TableInput server_host={server_host} dbProducts={dbProducts} />
        </>
    );
};

export default FetchProducts;
