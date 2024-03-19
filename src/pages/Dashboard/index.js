import { Header, SideBar } from "../../common";
import UserStatistics from "./UserStatistics";
import "./Dashboard.css";
import CostStatistics from "./CostStatictics";
import BestSellerProduct from "./BestSellerProduct";

const Dashboard = () => {
    return (
        <div id='Dashboard'>
            <Header currentPage={"Trang chủ"} />
            <SideBar currentPage={"home"} />
            <div className='dashboard-body'>
                <div className='top-container'>
                    <UserStatistics />
                    <CostStatistics />
                </div>
                <div className='bottom-container'>
                    <BestSellerProduct />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
