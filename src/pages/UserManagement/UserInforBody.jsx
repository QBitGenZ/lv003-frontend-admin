import { useEffect, useState } from "react";
import UserInfor from "./UserInfor";
import UserInforDetail from "./UserInforDetail";
import Pagination from "../../common/Pagination";

const UserInforBody = () => {
    const [showUserInforDetail, setShowUserInforDetail] = useState(false);
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_HOST_IP}/user?page=${currentPage}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers(data?.data);
                setTotalPage(data?.meta?.totalPage);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [currentPage]);

    const handleUserClicked = (event) => {
        setShowUserInforDetail(true);
        setUserId(event.currentTarget.id);
    };

    const user = users.find((obj) => obj._id === userId);

    const handleBackButtonClicked = () => {
        setShowUserInforDetail(false);
    };

    return showUserInforDetail ? (
        <UserInforDetail user={user} onClickBack={handleBackButtonClicked} />
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
                {users.map((user) => (
                    <UserInfor
                        userID={user?._id}
                        userName={user?.fullname}
                        userPhone={user?.phone}
                        userGender={user?.gender}
                        userAge={user?.birthday}
                        onClick={handleUserClicked}
                    />
                ))}
            </table>
            {totalPage > 0 && (
                <Pagination
                    totalPage={totalPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </div>
    );
};

export default UserInforBody;
