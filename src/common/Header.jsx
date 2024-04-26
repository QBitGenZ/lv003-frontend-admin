import "./Header.css";

const Header = ({ currentPage }) => {
    return (
        <div id='Header'>
            <div className='header-left'>{currentPage}</div>
            {/* <div className='header-right'>
                <div className='search-bar-container'>
                    <i class='fa-solid fa-magnifying-glass'></i>
                    <input
                        type='text'
                        className='search-bar'
                        placeholder='Tìm kiếm...'></input>
                </div>
                <div className='avatar'>
                    <img
                        src={process.env.PUBLIC_URL + "../images/avt_admin.png"}
                        alt='avt'></img>
                </div>
            </div> */}
        </div>
    );
};

export default Header;
