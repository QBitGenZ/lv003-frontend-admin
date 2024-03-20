import Header from "../../common/Header";
import SideBar from "../../common/SideBar";
import CategoriesWrapper from "./CategoriesWrapper";
import "./CategoriesManagement.css";

const CategoriesManagement = () => {
    return (
        <div id='CategoriesManagement'>
            <Header currentPage={"Quản lý danh mục"} />
            <SideBar currentPage={"categoryMng"} />
            <CategoriesWrapper />
        </div>
    );
};

export default CategoriesManagement;
