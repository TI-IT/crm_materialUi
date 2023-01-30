//GET
async function get() {
    const array = [];
    await fetch(server_host + '/data/getAllData', {
        method: 'get',
        credentials: 'include'
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (data.ok) {
                data.data.Clients.input?.map((obj) => {
                    array.push(obj);
                });
                data.data.Clients.dropdown?.map((obj) => {
                    array.push(obj);
                });
                setDbDataClientsTitles(array);
            }
        });
}
