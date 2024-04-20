import { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import QRCode from "react-qr-code";

const OrderListItem = ({ order, getData }) => {
    const [isCanceled, setIsCanceled] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(order?.status);

    useEffect(() => {
        setCurrentStatus(order?.status);
        order?.status === "Đã hủy" && setIsCanceled(true);
    }, [order]);

    // Chuyển đổi sang đối tượng Date
    const dateObj = new Date(order?.created_at);

    // Định dạng lại thời gian
    const formattedDate = `${dateObj.getDate()}/${
        dateObj.getMonth() + 1
    }/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;

    const status = [
        "Chờ xác nhận",
        "Đang chuẩn bị",
        "Đang vận chuyển",
        "Đã giao",
    ];

    const handleCancel = () => {
        setIsCanceled(true);
        cancelOrder();
    };

    const handleChangeStatus = (e) => {
        const newStatus = e.target.value;
        setCurrentStatus(newStatus);
        updateChangeStatus(newStatus);
    };

    const updateChangeStatus = (newStatus) => {
        fetch(`${process.env.REACT_APP_HOST_IP}/orders/${order?._id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                status: newStatus,
            }),
        })
            .then(() => getData())
            .catch((error) => alert(error));
    };

    const cancelOrder = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/orders/${order?._id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                status: "Đã hủy",
            }),
        })
            .then(() => getData())
            .catch((error) => alert(error));
    };

    return (
        <tr>
            <td>
                <QRCode
                    className='qrcode'
                    size={32}
                    value={order?._id}
                    viewBox={`0 0 256 256`}
                />
            </td>
            <td>{formattedDate}</td>
            <td>{order?.user?.fullname}</td>
            <td>
                <CurrencyFormat
                    value={order?.totalPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"VND"}
                    renderText={(value) => <div>{value}</div>}
                />
            </td>
            {/* <td>{orderProfit}</td> */}
            <td>
                <select
                    disabled={isCanceled}
                    onChange={handleChangeStatus}
                    value={currentStatus}>
                    {status?.map((value) => (
                        <option value={value} label={value} />
                    ))}
                </select>
            </td>
            <td>
                <i class='fa-solid fa-ban cancel' onClick={handleCancel}></i>
            </td>
        </tr>
    );
};

export default OrderListItem;
