import { Header, SideBar } from "../../common";
import UserInforBody from "./UserInforBody";
import "./UserManagement.css";

const UserMangement = () => {
    return (
        <div id='UserMangement'>
            <SideBar currentPage={"userMng"} />
            <Header currentPage={"Quản lý người dùng"} />
            <UserInforBody />
        </div>
    );
};

export default UserMangement;
