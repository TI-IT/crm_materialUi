import DataClients from '../../../crm/data/clients';

const Clients = ({ server_host }) => {
    return (
        <div>
            <h3>Клиенты</h3>
            <DataClients server_host={server_host} />
        </div>
    );
};

export default Clients;
