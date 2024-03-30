import OrderListItem from "./OrderListItem";
import {useEffect, useState} from 'react';

const OrderList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = () => {
    fetch(`${process.env.REACT_APP_HOST_IP}/orders/admin/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => setProducts(data.data))
      .catch(error => alert(error));
  }

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
                {products.map((item) => (
                    <OrderListItem
                        orderNumber={item._id}
                        orderTime={item.created_at}
                        orderCustomer={item.user.fullname}
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
