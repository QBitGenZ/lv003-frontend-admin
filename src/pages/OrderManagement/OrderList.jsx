import OrderListItem from "./OrderListItem";
import { useEffect, useState } from "react";
import Pagination from "../../common/Pagination";

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        getOrders();
    }, [currentPage]);

    const getOrders = () => {
        fetch(
            `${process.env.REACT_APP_HOST_IP}/orders/admin?page=${currentPage}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    Accept: "application/json",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setOrders(data?.data);
                filterOrders(data?.data, selectedStatus);
                setTotalPage(data?.meta?.totalPage);
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

    const filterOrders = (ordersToFilter, status) => {
        let filtered = [];
        if (status === "all") {
            filtered = [...ordersToFilter];
        } else {
            filtered = ordersToFilter.filter(
                (order) => order.status === status
            );
        }
        setFilteredOrders(filtered);
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

export default OrderList;
