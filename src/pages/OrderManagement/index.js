import Header from "../../common/Header";
import SideBar from "../../common/SideBar";
import OrderBody from "./OrderBody";
import "./OrderManagement.css";

const OrderManagement = () => {
    return (
        <div id='OrderManagement'>
            <Header currentPage={"Quản lý đơn hàng"} />
            <SideBar currentPage={"orderMng"} />
            <OrderBody />
        </div>
    );
};

export default OrderManagement;
