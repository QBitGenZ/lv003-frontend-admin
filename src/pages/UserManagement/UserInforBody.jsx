import { useState } from "react";
import { UserInforData } from "../../common/json/UserInfor";
import UserInfor from "./UserInfor";
import UserInforDetail from "./UserInforDetail";

const UserInforBody = () => {
    const [showUserInforDetail, setShowUserInforDetail] = useState(false);
    const [userId, setUserId] = useState();

    const handleUserClicked = (event) => {
        setShowUserInforDetail(true);
        setUserId(event.currentTarget.id);
    };

    const user = UserInforData.find((obj) => obj.userID === userId);

    const handleBackButtonClicked = () => {
        setShowUserInforDetail(false);
        console.log(user);
    };

    return showUserInforDetail ? (
        <UserInforDetail
            userID={user?.userID}
            userName={user?.userName}
            userAge={user?.userAge}
            userGender={user?.userGender}
            userEmail={user?.userEmail}
            userPhoneNumber={user?.userPhoneNumber}
            userAddress={user?.userAddress}
            onClickBack={handleBackButtonClicked}
        />
    ) : (
        <div id='UserInforBody'>
            <div className='user-infor-title'>Danh sách người dùng</div>
            <table className='user-infor-body'>
                <tr>
                    <th>ID</th>
                    <th>Người dùng</th>
                    <th>Số điện thoại</th>
                    <th>GIới tính</th>
                    <th>Tuổi</th>
                </tr>
                {UserInforData.map((user) => (
                    <UserInfor
                        userID={user?.userID}
                        userName={user?.userName}
                        userPhone={user?.userPhoneNumber}
                        userGender={user?.userGender}
                        userAge={user?.userAge}
                        onClick={handleUserClicked}
                    />
                ))}
            </table>
        </div>
    );
};

export default UserInforBody;
