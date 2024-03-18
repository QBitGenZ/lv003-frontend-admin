import "./Header.css";

const Header = ({ currentPage }) => {
    return (
        <div id='Header'>
            <div className='header-left-side'>{currentPage}</div>
            <div className='header-right-side'>
                <div className='search-bar'>
                    <i class='fa-solid fa-magnifying-glass'></i>
                    <input
                        className='search-frame'
                        type='text'
                        placeholder='Tìm kiếm...'></input>
                </div>
                <div className='avatar'>
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/avt_admin.png"
                        }></img>
                </div>
            </div>
        </div>
    );
};

export default Header;
