const OrderClientInfor = () => {
    return (
        <div id='OrderClientInfor'>
            <div className='order-client-infor-left'>
                <div className='order-left-title'>Địa chỉ nhận hàng</div>
                <div className='order-left-body'>
                    <div className='customer-name'>Ngọc Truyện</div>
                    <div className='customer-phone'>0319916492</div>
                    <div className='customer-address'>
                        Xuân Khánh, Ninh Kiều, Cần Thơ
                    </div>
                </div>
            </div>
            <table className='order-client-infor-right'>
                <tr>
                    <td>Tạm tính</td>
                    <td>6.200.000vnd</td>
                </tr>
                <tr>
                    <td>Phí vận chuyển</td>
                    <td>30.000vnd</td>
                </tr>
                <tr>
                    <td>Giảm giá</td>
                    <td>300.000vnd</td>
                </tr>
                <tr>
                    <td>Tổng cộng</td>
                    <td>5.900.000vnd</td>
                </tr>
            </table>
        </div>
    );
};

export default OrderClientInfor;
