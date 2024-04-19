import BestSellerProductItem from "./BestSellerProductItem";
import { ProductData } from "../../common/json/ProductData";
import { useEffect, useState } from "react";

const BestSellerProduct = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_HOST_IP}/statistics/best-seller`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setProduct(data?.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <div id='BestSellerProduct'>
            <div className='best-seller-prod-title'>Sản phẩm bán chạy</div>
            <table className='best-seller-prod-body'>
                <tr>
                    <th>Mã SP</th>
                    <th>Sản phẩm</th>
                    <th>Số lượng bán</th>
                    {/* <th>Doanh thu</th> */}
                </tr>
                {product.map((prod) => (
                    <BestSellerProductItem product={prod} />
                ))}
            </table>
        </div>
    );
};

export default BestSellerProduct;
