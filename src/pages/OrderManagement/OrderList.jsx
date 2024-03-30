import { useState } from "react";
import { Orders } from "../../common/json/Orders";
import OrderListItem from "./OrderListItem";
import { useEffect } from "react";

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_HOST_IP}/orders`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setOrders(data?.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div id='OrderList'>
            <div className='order-list-title'>Danh sách đơn hàng</div>
            <table>
                <tr>
                    <th>Mã đơn hàng</th>
                    <th>Thời gian đặt hàng</th>
                    <th>Khách hàng</th>
                    <th>Giá trị đơn hàng</th>
                    <th>Lợi nhuận</th>
                    <th>Trạng thái</th>
                </tr>
                {orders.map((item) => (
                    <OrderListItem order={item} />
                ))}
            </table>
        </div>
    );
};

export default OrderList;
