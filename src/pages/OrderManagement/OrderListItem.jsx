import CurrencyFormat from "react-currency-format";

const OrderListItem = ({
    orderNumber,
    orderTime,
    orderCustomer,
    orderCost,
    // orderProfit,
    orderStatus,
}) => {
    const dbDate = "2024-03-28T15:14:28.820Z";

    // Chuyển đổi sang đối tượng Date
    const dateObj = new Date(dbDate);

    // Định dạng lại thời gian
    const formattedDate = `${dateObj.getDate()}/${
        dateObj.getMonth() + 1
    }/${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;

    return (
        <tr>
            <td>{orderNumber}</td>
            <td>{formattedDate}</td>
            <td>{orderCustomer}</td>
            <td>
                <CurrencyFormat
                    value={orderCost}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"VND"}
                    renderText={(value) => <div>{value}</div>}
                />
            </td>
            {/* <td>{orderProfit}</td> */}
            <td>{orderStatus}</td>
            <td>
                <i class='fa-solid fa-angle-down'></i>
            </td>
        </tr>
    );
};

export default OrderListItem;
