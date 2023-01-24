export default function ClientService(server_host) {
    fetch(server_host + '/clients/getAll', {
        method: 'get',
        credentials: 'include'
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (data.ok) {
                return data.clients;
            }
        });
}
