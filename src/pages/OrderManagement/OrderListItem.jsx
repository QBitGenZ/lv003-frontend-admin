const OrderListItem = ({
    orderNumber,
    orderTime,
    orderCustomer,
    orderCost,
    orderProfit,
    orderStatus,
}) => {
    return (
        <tr>
            <td>{orderNumber}</td>
            <td>{orderTime}</td>
            <td>{orderCustomer}</td>
            <td>{orderCost}</td>
            <td>{orderProfit}</td>
            <td>{orderStatus}</td>
            <td>
                <i class='fa-solid fa-angle-down'></i>
            </td>
        </tr>
    );
};

export default OrderListItem;
