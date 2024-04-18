import Header from "../../common/Header";
import SideBar from "../../common/SideBar";
import ProductManagementBody from "./ProductManagementBody";
import "./ProductManagement.css";
import AddProduct from "./AddProduct";
import { useState } from "react";
import EditProduct from "./EditProduct";

const ProductManagement = () => {
    const currentPage = "Quản lý sản phẩm";

    const [showEditProduct, setShowEditProduct] = useState(false);
    const [showAddProduct, setShowAddProduct] = useState(false);

    const [productId, setProductId] = useState(null);

    const handleClickEdit = (e) => {
        setProductId(e.target.id);
        setShowEditProduct(true);
    };

    const handleAddProductClicked = () => {
        setShowAddProduct(true);
    };

    const handleBackButtonClicked = () => {
        setShowAddProduct(false);
        setShowEditProduct(false);
    };

    return (
        <div id='ProductManagement'>
            <Header currentPage={currentPage} />
            <SideBar currentPage={"productMng"} />
            {showEditProduct ? (
                <EditProduct
                    productId={productId}
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
