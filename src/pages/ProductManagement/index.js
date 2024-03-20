import Header from "../../common/Header";
import SideBar from "../../common/SideBar";
import ProductManagementBody from "./ProductManagementBody";
import "./ProductManagement.css";
import EditProduct from "./EditProduct";
import { useState } from "react";

const ProductManagement = () => {
    const currentPage = "Quản lý sản phẩm";

    const [showEditProduct, setShowEditProduct] = useState(false);

    const handleAddProductClicked = () => {
        setShowEditProduct(true);
    };

    const handleBackButtonClicked = () => {
        setShowEditProduct(false);
    };

    return (
        <div id='ProductManagement'>
            <Header currentPage={currentPage} />
            <SideBar currentPage={"productMng"} />
            {showEditProduct ? (
                <EditProduct
                    handleBackButtonClicked={handleBackButtonClicked}
                />
            ) : (
                <ProductManagementBody
                    handleAddProductClicked={handleAddProductClicked}
                />
            )}
        </div>
    );
};

export default ProductManagement;
