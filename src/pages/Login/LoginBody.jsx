import { useState } from "react";
import { Link } from "react-router-dom";

const LoginBody = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("username", username);
        formData.append("password", password);

        fetch(`${process.env.REACT_APP_HOST_IP}/login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("token", data.access_token);
                if (localStorage.getItem("token")) {
                    alert("Đăng nhập thành công");
                    window.location.href = "/dashboard";
                }
            })
            .catch((error) => {
                console.log(error);
                alert("Đăng nhập thất bại");
            });
    };

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
                        <input
                            type='text'
                            placeholder='Tên đăng nhập'
                            onChange={(e) =>
                                setUsername(e.target.value)
                            }></input>
                        <i class='fa-solid fa-user'></i>
                        <input
                            type='password'
                            placeholder='Mật khẩu'
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }></input>
                        <i class='fa-solid fa-lock'></i>
                    </form>
                    <button className='button login-btn' onClick={handleLogin}>
                        Đăng nhập
                    </button>
                </div>
            </div>
        </>
    );
};

export default LoginBody;
