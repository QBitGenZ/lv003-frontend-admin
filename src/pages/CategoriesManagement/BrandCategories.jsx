import CategoriesHeader from "./CategoriesHeader";
import CategoriesList from "./CategoriesList";
import { useEffect, useState } from "react";
import Pagination from "../../common/Pagination";

const BrandCategories = () => {
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        getData();
    }, [currentPage]);

    const getData = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/brands?page=${currentPage}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setCategories(data?.data);
                setTotalPage(data?.meta?.totalPage);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div id='BrandCategories'>
            <CategoriesHeader
                categoriesType={"Danh mục nhãn hàng"}
                type={"brands"}
            />
            <CategoriesList categories={categories} type={"brands"} />
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

export default BrandCategories;
