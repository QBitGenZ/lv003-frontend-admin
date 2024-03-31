import OrderListItem from "./OrderListItem";
import { useEffect, useState } from "react";

const OrderList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getOrders();
    }, []);

    const getOrders = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/orders/admin/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => setProducts(data.data))
            .catch((error) => alert(error));
    };

    let price = 0;

    return (
        <div id='OrderList'>
            <div className='order-list-title'>Danh sách đơn hàng</div>
            <table>
                <tr>
                    <th>Mã đơn hàng</th>
                    <th>Thời gian đặt hàng</th>
                    <th>Khách hàng</th>
                    <th>Giá trị đơn hàng</th>
                    {/* <th>Lợi nhuận</th> */}
                    <th>Trạng thái</th>
                    <th>Hủy đơn</th>
                </tr>
                {products?.map((product) => {
                    product?.items?.map((item) => {
                        price += item?.product?.price * item?.quantity;
                    });
                    return (
                        <OrderListItem
                            orderNumber={product?._id}
                            orderTime={product?.created_at}
                            orderCustomer={product?.user?.fullname}
                            orderCost={price}
                            // orderProfit={product?.orderProfit}
                            orderStatus={product?.status}
                        />
                    );
                })}
            </table>
        </div>
    );
};

export default OrderList;
