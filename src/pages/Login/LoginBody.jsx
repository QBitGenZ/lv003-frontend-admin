import { Link } from "react-router-dom";

const LoginBody = () => {
    return (
        <>
            <div id='LoginBody'>
                <div className='login-left-side'>
                    <img
                        src={
                            process.env.PUBLIC_URL + "images/brand_logo.png"
                        }></img>
                    <img
                        className='lotus'
                        src={process.env.PUBLIC_URL + "images/lotus.png"}></img>
                </div>
                <div className='login-right-side'>
                    <form className='login-form'>
                        <input type='text' placeholder='Tên đăng nhập'></input>
                        <i class='fa-solid fa-user'></i>
                        <input type='password' placeholder='Mật khẩu'></input>
                        <i class='fa-solid fa-lock'></i>
                    </form>
                    <Link to={"/admin/dashboard"} className='button login-btn'>
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </>
    );
};

export default LoginBody;
