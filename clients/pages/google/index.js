import React from 'react';

const GoogleSheets = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        let url = 'https://script.google.com/macros/s/AKfycbzpzwWIeC6VXM6raZBB8YL08kRZpM2goz3UpKb_x4GLBnhygNroVbDKrQxb0A0feEb8/exec?products=all';
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data.products);
            });
    }, []);
    // const products = data.map((obj) => console.log(obj.productName));
    const products = data.map((obj) => <div key={obj.id}>{obj.productName}</div>);
    // const sceletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
    // console.log(products);
    return (
        <div className="container">
            <div className="content__top"></div>
            <h2 className="content__title">Все товары</h2>
            <div className="content__items">
                <div className="content__items">
                    <h1>Products</h1>
                    {products}
                </div>
            </div>
        </div>
    );
};

export default GoogleSheets;
