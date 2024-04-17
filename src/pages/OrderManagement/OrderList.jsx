import OrderListItem from "./OrderListItem";
import { useEffect, useState } from "react";

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("all");

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
            .then((data) => {
                setOrders(data?.data);
                setFilteredOrders(data?.data);
            })
            .catch((error) => alert(error));
    };

    const handleFilterChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedStatus(selectedValue);

        if (selectedValue === "all") {
            setFilteredOrders(orders);
        } else {
            setFilteredOrders(
                orders.filter((order) => order.status === selectedValue)
            );
            console.log(filteredOrders);
        }
    };

    let price = 0.0;

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
                    <select
                        value={selectedStatus}
                        onChange={handleFilterChange}>
                        <option value={"all"}>-- Tất cả --</option>
                        {status.map((value) => (
                            <option key={value} value={value}>
                                {value}
                            </option>
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
                {filteredOrders?.map((order) => {
                    order?.items?.map((item) => {
                        price +=
                            item?.product?.price * 1.0 * item?.quantity + 25000;
                    });

                    order = { ...order, price: price };

                    return <OrderListItem order={order} getData={getOrders} />;
                })}
            </table>
        </div>
    );
};

export default OrderList;
