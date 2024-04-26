import { useState } from "react";
import UserViolation from "./UserViolation";

const UserInforDetail = ({ user, onClickBack }) => {
    const [currentTab, setCurrentTab] = useState("information");

    const handleChangeViolationTab = () => {
        setCurrentTab("violation");
    };

    const handleChangeInformationTab = () => {
        setCurrentTab("information");
    };

    function calculateAge(dateString) {
        const birthday = new Date(dateString);
        const today = new Date();
        const currentYear = today.getFullYear();
        const birthYear = birthday.getFullYear();

        // Tính tuổi theo năm
        let age = currentYear - birthYear;

        return age;
    }

    const deleteUser = (username) => {
        fetch(`${process.env.REACT_APP_HOST_IP}/${username}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }).then((res) => {
            if (res.status === 204) {
                alert("Xóa tài khoản thành công");
                window.location.reload();
            } else {
                alert("Xóa tài khoản thất bại");
            }
        });
    };

    console.log(user);

    return (
        <div id='UserInforDetail'>
            <div className='back-button' onClick={onClickBack}>
                <i class='fa-solid fa-chevron-left'></i> Trở về
            </div>
            <div className='user-infor-detail-body'>
                {/* <div className='user-infor-detail-body-left'>
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/user_detail.png"
                        }></img>
                </div> */}
                <div className='user-infor-detail-body-right'>
                    <div className='user-detail-right-top'>
                        <div className='user-name-wrapper'>
                            <div
                                className='user-name'
                                style={{ color: "#666" }}>
                                Người dùng <span>{user?.fullname}</span>
                            </div>
                            <div
                                className='user-email'
                                style={{
                                    color: "#666",
                                    textDecoration: "none",
                                }}>
                                Email <span>{user?.email}</span>
                            </div>
                        </div>
                        <div
                            className='delete-user-btn'
                            onClick={() => deleteUser(user?.username)}>
                            Xóa tài khoản
                        </div>
                    </div>
                    <div className='user-detail-right-bot'>
                        <div className='user-detail-bot-header'>
                            <div
                                className={
                                    (currentTab === "information"
                                        ? "active "
                                        : "") + "information-tab"
                                }
                                onClick={handleChangeInformationTab}>
                                Thông tin
                            </div>
                            {/* <div
                                className={
                                    (currentTab === "violation"
                                        ? "active "
                                        : "") + "violation-tab"
                                }
                                onClick={handleChangeViolationTab}>
                                Vi phạm
                            </div> */}
                        </div>
                        {currentTab === "information" ? (
                            <table className='user-detail-bot-body'>
                                <tr className='user-id'>
                                    <td className='key'>UID: </td>
                                    <td>{user?._id}</td>
                                </tr>
                                <tr className='user-name'>
                                    <td className='key'>Họ tên: </td>
                                    <td>{user?.fullname}</td>
                                </tr>
                                <tr className='user-age'>
                                    <td className='key'>Tuổi: </td>
                                    <td>{calculateAge(user?.birthday)}</td>
                                </tr>
                                <tr className='user-gender'>
                                    <td className='key'>Giới tính: </td>
                                    <td>{user?.gender}</td>
                                </tr>
                                <tr className='user-email'>
                                    <td className='key'>Email: </td>
                                    <td>{user?.email}</td>
                                </tr>
                                <tr className='user-phone'>
                                    <td className='key'>SĐT: </td>
                                    <td>{user?.phone}</td>
                                </tr>
                                <tr className='user-address'>
                                    <td className='key'>Địa chỉ: </td>
                                    <td>{user?.address}</td>
                                </tr>
                            </table>
                        ) : (
                            <div className='user-detail-bot-body'>
                                {/* <UserViolation
                                    title={"Nội dung vi phạm"}
                                    date={"20-02-2024 18:30"}
                                />
                                <UserViolation
                                    title={"Nội dung vi phạm"}
                                    date={"20-02-2024 18:30"}
                                />
                                <UserViolation
                                    title={"Nội dung vi phạm"}
                                    date={"20-02-2024 18:30"}
                                />
                                <UserViolation
                                    title={"Nội dung vi phạm"}
                                    date={"20-02-2024 18:30"}
                                /> */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInforDetail;
