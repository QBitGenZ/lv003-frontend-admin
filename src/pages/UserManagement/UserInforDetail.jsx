import { useState } from "react";
import UserViolation from "./UserViolation";

const UserInforDetail = ({
    userID,
    userName,
    userAge,
    userGender,
    userEmail,
    userPhoneNumber,
    userAddress,
    onClickBack,
}) => {
    const [currentTab, setCurrentTab] = useState("information");

    const handleChangeViolationTab = () => {
        setCurrentTab("violation");
    };

    const handleChangeInformationTab = () => {
        setCurrentTab("information");
    };

    return (
        <div id='UserInforDetail'>
            <div className='back-button' onClick={onClickBack}>
                <i class='fa-solid fa-chevron-left'></i> Trở về
            </div>
            <div className='user-infor-detail-body'>
                <div className='user-infor-detail-body-left'>
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/user_detail.png"
                        }></img>
                </div>
                <div className='user-infor-detail-body-right'>
                    <div className='user-detail-right-top'>
                        <div className='user-name-wrapper'>
                            <div className='user-name'>{userName}</div>
                            <div className='user-email'>{userEmail}</div>
                        </div>
                        <div className='delete-user-btn'>Xóa tài khoản</div>
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
                            <div
                                className={
                                    (currentTab === "violation"
                                        ? "active "
                                        : "") + "violation-tab"
                                }
                                onClick={handleChangeViolationTab}>
                                Vi phạm
                            </div>
                        </div>
                        {currentTab === "information" ? (
                            <table className='user-detail-bot-body'>
                                <tr className='user-id'>
                                    <td className='key'>UID: </td>
                                    <td>{userID}</td>
                                </tr>
                                <tr className='user-name'>
                                    <td className='key'>Họ tên: </td>
                                    <td>{userName}</td>
                                </tr>
                                <tr className='user-age'>
                                    <td className='key'>Tuổi: </td>
                                    <td>{userAge}</td>
                                </tr>
                                <tr className='user-gender'>
                                    <td className='key'>Giới tính: </td>
                                    <td>{userGender}</td>
                                </tr>
                                <tr className='user-email'>
                                    <td className='key'>Email: </td>
                                    <td>{userEmail}</td>
                                </tr>
                                <tr className='user-phone'>
                                    <td className='key'>SĐT: </td>
                                    <td>{userPhoneNumber}</td>
                                </tr>
                                <tr className='user-address'>
                                    <td className='key'>Địa chỉ: </td>
                                    <td>{userAddress}</td>
                                </tr>
                            </table>
                        ) : (
                            <div className='user-detail-bot-body'>
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
                                />
                                <UserViolation
                                    title={"Nội dung vi phạm"}
                                    date={"20-02-2024 18:30"}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInforDetail;
