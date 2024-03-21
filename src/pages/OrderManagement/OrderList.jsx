import { Orders } from "../../common/json/Orders";
import OrderListItem from "./OrderListItem";

const OrderList = () => {
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
                {Orders.map((item) => (
                    <OrderListItem
                        orderNumber={item.orderNumber}
                        orderTime={item.orderTime}
                        orderCustomer={item.orderCustomer}
                        orderCost={item.orderCost}
                        orderProfit={item.orderProfit}
                        orderStatus={item.orderStatus}
                    />
                ))}
            </table>
        </div>
    );
};

export default OrderList;
