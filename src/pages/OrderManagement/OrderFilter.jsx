import { OrderStatus } from "../../common/json/OrderStatus";

const OrderFilter = () => {
    return (
        <div id='OrderFilter'>
            <div className='order-filter-header'>
                <div className='order-filter-title'>Bộ lọc</div>
                <div className='order-filter-clear'>Xóa bộ lọc</div>
            </div>
            <div className='order-filter-body'>
                <div className='filter-all filter-item'>
                    <input
                        id='order-all'
                        type='radio'
                        name='order-filter'></input>
                    <label htmlFor='order-all'>Tất cả</label>
                </div>
                {OrderStatus.map((status) => {
                    return (
                        <>
                            <div className='filter-item'>
                                <input
                                    id={status.statusCode}
                                    type='radio'
                                    name='order-filter'></input>
                                <label htmlFor={status.statusCode}>
                                    {status.statusName}
                                </label>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default OrderFilter;
