import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useState } from "react";

const SideBar = ({ currentPage }) => {
    const [page, setPage] = useState(currentPage);

    const handleHomeCLicked = () => {
        setPage("home");
    };

    const handleUserMngCLicked = () => {
        setPage("userMng");
    };

    const handleCatagoryMngCLicked = () => {
        setPage("categoryMng");
    };

    const handleProductMngCLicked = () => {
        setPage("productMng");
    };

    const handleOrderMngCLicked = () => {
        setPage("orderMng");
    };

    return (
        <div id='SideBar'>
            <div className='brand-logo'>
                <img
                    src={process.env.PUBLIC_URL + "/images/brand_logo.png"}
                    className='logo-text'></img>
                <img
                    src={process.env.PUBLIC_URL + "/images/lotus.png"}
                    className='lotus'></img>
            </div>
            <div className='navigation'>
                <Link
                    to={"/dashboard"}
                    className={
                        (page === "home" ? "active " : "") + "nav-item nav-home"
                    }
                    onClick={handleHomeCLicked}>
                    <i class='fa-solid fa-house'></i>
                    <span>Trang chủ</span>
                </Link>
                <Link
                    to={"/user-management"}
                    className={
                        (page === "userMng" ? "active " : "") +
                        "nav-item nav-user-mng"
                    }
                    onClick={handleUserMngCLicked}>
                    <i class='fa-solid fa-users'></i>
                    <span>Quản lý người dùng</span>
                </Link>
                <Link
                    to={"/category-management"}
                    className={
                        (page === "categoryMng" ? "active " : "") +
                        "nav-item nav-catagpry-mng"
                    }
                    onClick={handleCatagoryMngCLicked}>
                    <i class='fa-solid fa-list-ul'></i>
                    <span>Quản lý danh mục</span>
                </Link>
                <Link
                    to={"/product-management"}
                    className={
                        (page === "productMng" ? "active " : "") +
                        "nav-item nav-product-mng"
                    }
                    onClick={handleProductMngCLicked}>
                    <i class='fa-solid fa-wand-magic-sparkles'></i>
                    <span>Quản lý sản phẩm</span>
                </Link>
                <Link
                    to={"/order-management"}
                    className={
                        (page === "orderMng" ? "active " : "") +
                        "nav-item nav-order"
                    }
                    onClick={handleOrderMngCLicked}>
                    <i class='fa-solid fa-box'></i>
                    <span>Quản lý đơn hàng</span>
                </Link>
            </div>
            <div className='logout-container'>
                <Link to={"/"} className='logout'>
                    <i class='fa-solid fa-arrow-right-from-bracket'></i>
                    <span>Đăng xuất</span>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;
