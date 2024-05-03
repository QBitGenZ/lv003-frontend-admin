import { useState, useEffect } from "react";
import Pagination from "../../common/Pagination";

const Inventory = () => {
    const [products, setProducts] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        getInventory();
    }, [currentPage]);

    const getInventory = () => {
        fetch(
            `${process.env.REACT_APP_HOST_IP}/statistics/inventory?page=${currentPage}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setProducts(data?.inventory);
                setTotalPage(data?.meta?.totalPage);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    console.log(products);
    const productList = Object.entries(products);

    return (
        <div id='Inventory'>
            <div className='inventory-prod-title'>Hàng tồn kho</div>
            <table className='inventory-prod-body'>
                <tr>
                    <th>STT</th>
                    <th>Sản phẩm</th>
                    <th>Số lượng</th>
                </tr>
                {productList.map(([key, value], index) => {
                    return (
                        <tr>
                            <td className='product-code'>
                                {index + 1 + (currentPage - 1) * 10}
                            </td>
                            <td className='product-name'>{key}</td>
                            <td className='product-quantity'>{value}</td>
                        </tr>
                    );
                })}
            </table>
            {totalPage > 0 && (
                <Pagination
                    totalPage={totalPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </div>
    );
};

export default Inventory;
