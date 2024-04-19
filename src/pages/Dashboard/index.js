import { Header, SideBar } from "../../common";
import "./Dashboard.css";
import CostStatistics from "./CostStatictics";
import BestSellerProduct from "./BestSellerProduct";
import Inventory from "./Inventory";

const Dashboard = () => {
    return (
        <div id='Dashboard'>
            <Header currentPage={"Trang chủ"} />
            <SideBar currentPage={"home"} />
            <div className='dashboard-body'>
                <div className='top-container'>
                    <CostStatistics />
                </div>
                <div className='bottom-container'>
                    <BestSellerProduct />
                    <Inventory />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
