import OrderListItem from "./OrderListItem";
import { useEffect, useState } from "react";

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders();
    }, []);

    const getOrders = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/orders/admin/`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => setOrders(data.data))
            .catch((error) => alert(error));
    };

    let price = 0;

    const status = [
        "Chờ xác nhận",
        "Đang chuẩn bị",
        "Đang vận chuyển",
        "Đã giao",
    ];

    return (
        <div id='OrderList'>
            <div className='order-list-header'>
                <div className='order-list-title'>Danh sách đơn hàng</div>
                <div className='order-list-filter'>
                    <span>Bộ lọc: </span>
                    <select>
                        <option value={"all"}>-- Tất cả --</option>
                        {status.map((value) => (
                            <option value={value}>{value}</option>
                        ))}
                    </select>
                </div>
            </div>
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
                {orders?.map((order) => {
                    order?.items?.map((item) => {
                        price += item?.product?.price * item?.quantity;
                    });
                    return (
                        <OrderListItem
                            orderNumber={order?._id}
                            orderTime={order?.created_at}
                            orderCustomer={order?.user?.fullname}
                            orderCost={price}
                            // orderProfit={order?.orderProfit}
                            orderStatus={order?.status}
                        />
                    );
                })}
            </table>
        </div>
    );
};

export default OrderList;
