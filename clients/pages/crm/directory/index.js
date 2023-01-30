import DataDirectory from '../../../crm/data/directory';

const Directory = ({ server_host }) => {
    return (
        <div>
            <h3>спавочник</h3>
            <DataDirectory server_host={server_host} />
        </div>
    );
};

export default Directory;
