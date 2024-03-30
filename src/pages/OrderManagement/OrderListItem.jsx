import { useEffect } from "react";

const OrderListItem = ({ order }) => {
    const dbDate = order?.created_at;

    // Chuyển đổi sang đối tượng Date
    const dateObj = new Date(dbDate);

    // Định dạng lại thời gian
    const formattedDate = `${dateObj.getDate()}/${
        dateObj.getMonth() + 1
    }/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;

    let orderCost = 0;
    let orderProfit = 0;

    return (
        <tr>
            <td>#{order?._id}</td>
            <td>{formattedDate}</td>
            <td>{order?.user}</td>
            <td>{orderCost}</td>
            <td>{orderProfit}</td>
            <td>{"Đã giao"}</td>
            <td>
                <i class='fa-solid fa-angle-down'></i>
            </td>
        </tr>
    );
};

export default OrderListItem;
