import Header from "../../common/Header";
import SideBar from "../../common/SideBar";
import ProductManagementBody from "./ProductManagementBody";
import "./ProductManagement.css";
import EditProduct from "./EditProduct";
import { useState } from "react";
import AddProduct from "./AddProduct";

const ProductManagement = () => {
    const currentPage = "Quản lý sản phẩm";

    const [showEditProduct, setShowEditProduct] = useState(false);
    const [showAddProduct, setShowAddProduct] = useState(false);

    const [product, setProduct] = useState(null);

    const handleClickEdit = () => {
        setShowAddProduct(true);
    };

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
            ) : showAddProduct ? (
                <AddProduct handleBackButtonClicked={handleBackButtonClicked} />
            ) : (
                <ProductManagementBody
                    handleAddProductClicked={handleAddProductClicked}
                    handleClickEdit={handleClickEdit}
                />
            )}
        </div>
    );
};

export default ProductManagement;
