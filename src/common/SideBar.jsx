import "./Sidebar.css";

const SideBar = () => {
    return (
        <div id='SideBar'>
            <div className='brand-logo'>
                <img
                    src={process.env.PUBLIC_URL + "./images/brand_logo.png"}
                    className='logo-text'></img>
                <img
                    src={process.env.PUBLIC_URL + "./images/lotus.png"}
                    className='lotus'></img>
            </div>
            <div className='navigation'>
                <div className='nav-item nav-home'>
                    <i class='fa-solid fa-house'></i>
                    <span>Trang chủ</span>
                </div>
                <div className='nav-item nav-user-mng'>
                    <i class='fa-solid fa-users'></i>
                    <span>Quản lý người dùng</span>
                </div>
                <div className='nav-item nav-catagpry-mng'>
                    <i class='fa-solid fa-list-ul'></i>
                    <span>Quản lý danh mục</span>
                </div>
                <div className='nav-item nav-product-mng'>
                    <i class='fa-solid fa-wand-magic-sparkles'></i>
                    <span>Quản lý sản phẩm</span>
                </div>
                <div className='nav-item nav-order'>
                    <i class='fa-solid fa-box'></i>
                    <span>Quản lý đơn hàng</span>
                </div>
                <div className='nav-item nav-article'>
                    <i class='fa-solid fa-envelopes-bulk'></i>
                    <span>Quản lý bài đăng</span>
                </div>
            </div>
            <div className='logout-container'>
                <div className='logout'>
                    <i class='fa-solid fa-arrow-right-from-bracket'></i>
                    <span>Đăng xuất</span>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
