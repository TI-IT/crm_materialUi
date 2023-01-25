import ClientsTable from '../../../crm/clients/table';

const Clients = ({ server_host }) => {
    return (
        <div>
            <h3>Клиенты</h3>
            <ClientsTable server_host={server_host} />
        </div>
    );
};

export default Clients;
