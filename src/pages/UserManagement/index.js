import { Header, SideBar } from "../../common";

const UserMangement = () => {
    return (
        <div id='UserMangement'>
            <SideBar currentPage={"userMng"} />
            <Header currentPage={"Quản lý người dùng"} />
        </div>
    );
};

export default UserMangement;
