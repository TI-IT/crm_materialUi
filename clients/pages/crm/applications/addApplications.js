import AddApplications from '../../../crm/applications/addApplications';

const Clients = ({ server_host }) => {
    return (
        <div>
            <h3>Зказы</h3>
            <button>назад</button>
            <AddApplications server_host={server_host} />
        </div>
    );
};

export default Clients;
