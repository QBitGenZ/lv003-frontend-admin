import { Header, SideBar } from "../../common";
import UserStatistics from "./UserStatistics";
import "./Dashboard.css";
import CostStatistics from "./CostStatictics";

const Dashboard = () => {
    return (
        <div id='Dashboard'>
            <Header currentPage={"Trang chủ"} />
            <SideBar />
            <div className='dashboard-body'>
                <UserStatistics />
                <CostStatistics />
            </div>
        </div>
    );
};

export default Dashboard;
