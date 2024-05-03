import OrderListItem from "./OrderListItem";
import { useEffect, useState } from "react";
import Pagination from "../../common/Pagination";

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [selectedPayment, setSelectedPayment] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        getOrders();
    }, [currentPage, selectedStatus, selectedPayment]);

    const getOrders = () => {
        console.log("selectedStatus", selectedStatus);
        fetch(
            `${process.env.REACT_APP_HOST_IP}/orders/admin?page=${currentPage}&status=${selectedStatus}&isPaid=${selectedPayment}`,
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
                setTotalPage(data?.meta?.totalPage);
            })
            .catch((error) => alert(error));
    };

    const handleFilterChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedStatus(selectedValue);
        setCurrentPage(1);
    };

    const handleChangePayment = (e) => {
        setSelectedPayment(e.target.value);
        setCurrentPage(1);
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
                    {" & "}
                    <select
                        value={selectedPayment}
                        onChange={(e) => handleChangePayment(e)}>
                        <option value={"all"}>-- Tất cả --</option>
                        <option value={"Đã thanh toán"}>Đã thanh toán</option>
                        <option value={"Chưa thanh toán"}>
                            Chưa thanh toán
                        </option>
                    </select>
                </div>
            </div>
            <table>
                <tr>
                    <th>Mã đơn hàng</th>
                    <th>Thời gian đặt hàng</th>
                    <th>Khách hàng</th>
                    <th>Giá trị đơn hàng</th>
                    <th>PTTT</th>
                    <th>Trạng thái</th>
                    <th>Đã thanh toán</th>
                    <th>Hủy đơn</th>
                </tr>
                {orders?.map((order) => {
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
