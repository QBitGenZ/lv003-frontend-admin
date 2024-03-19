import Header from "../../common/Header";
import SideBar from "../../common/SideBar";
import ProductManagementBody from "./ProductManagementBody";
import "./ProductManagement.css";

const ProductManagement = () => {
    return (
        <div id='ProductManagement'>
            <Header currentPage={"Quản lý sản phẩm"} />
            <SideBar currentPage={"productMng"} />
            <ProductManagementBody />
        </div>
    );
};

export default ProductManagement;
