import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import QRCode from "react-qr-code";

const OrderListItem = ({
    orderNumber,
    orderTime,
    orderCustomer,
    orderCost,
    // orderProfit,
    orderStatus,
}) => {
    // Chuyển đổi sang đối tượng Date
    const dateObj = new Date(orderTime);

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

    const [isCanceled, setIsCanceled] = useState(false);

    const handleCancel = () => {
        setIsCanceled(true);
    };

    const handleChangeStatus = (e) => {
        const newStatus = e.target.value;

        fetch(`${process.env.REACT_APP_HOST_IP}/orders/${orderNumber}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                status: newStatus,
            }),
        });
    };

    return (
        <tr>
            <td>
                <QRCode
                    className='qrcode'
                    size={32}
                    value={orderNumber}
                    viewBox={`0 0 256 256`}
                />
            </td>
            <td>{formattedDate}</td>
            <td>{orderCustomer}</td>
            <td>
                <CurrencyFormat
                    value={
                        orderCost + orderCost * 0.1 + (orderCost ? 25000 : 0)
                    }
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"VND"}
                    renderText={(value) => <div>{value}</div>}
                />
            </td>
            {/* <td>{orderProfit}</td> */}
            <td>
                <select disabled={isCanceled} onChange={handleChangeStatus}>
                    {status.map((value) => (
                        <option value={value}>{value}</option>
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
