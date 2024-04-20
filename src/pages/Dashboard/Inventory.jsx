import { useState, useEffect } from "react";

const Inventory = () => {
    const [products, setProducts] = useState({});

    useEffect(() => {
        getInventory();
    }, []);

    const getInventory = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/statistics/inventory`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setProducts(data?.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    console.log(products);
    const productList = Object.entries(products);
    let i = 0;

    return (
        <div id='Inventory'>
            <div className='inventory-prod-title'>Hàng tồn kho</div>
            <table className='inventory-prod-body'>
                <tr>
                    <th>STT</th>
                    <th>Sản phẩm</th>
                    <th>Số lượng</th>
                </tr>
                {productList.map(([key, value]) => {
                    return (
                        <tr>
                            <td className='product-code'>{++i}</td>
                            <td className='product-name'>{key}</td>
                            <td className='product-quantity'>{value}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default Inventory;
