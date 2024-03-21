const OrderStatus = ({ currentStatus }) => {
    return (
        <div id='OrderStatus'>
            <img src={process.env.PUBLIC_URL + "/images/orderFlow"}></img>
        </div>
    );
};

export default OrderStatus;
