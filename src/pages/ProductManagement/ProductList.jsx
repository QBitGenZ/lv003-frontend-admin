import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ handleClickEdit }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/products/admin/`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
            },
        })
            .then((res) =>
                res.status === 200 ? res.json() : Promise.reject(res.json())
            )
            .then((data) => {
                setProducts(data?.data);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div id='ProductList'>
            <table>
                <tr>
                    <th>Mã Sản Phẩm</th>
                    <th>Sản phẩm</th>
                    <th>Giá bán</th>
                    {/* <th>Giá mua</th> */}
                    <th>Tồn kho</th>
                    <th>Danh mục</th>
                    <th>Chỉnh sửa</th>
                </tr>
                {products?.map((item) => (
                    <ProductItem
                        prodId={item._id}
                        prodName={item?.name}
                        prodImg={item?.images[0]}
                        prodSellPrice={item?.price}
                        prodBuyPrice={item?.cost}
                        prodInventory={item?.quantity}
                        prodCategory={item?.type?.name}
                        getProducts={getProducts}
                        handleClickEdit={handleClickEdit}
                    />
                ))}
            </table>
        </div>
    );
};

export default ProductList;
