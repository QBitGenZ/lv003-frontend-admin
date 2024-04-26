import Pagination from "../../common/Pagination";
import CategoriesHeader from "./CategoriesHeader";
import CategoriesList from "./CategoriesList";
import EditCategory from "./EditCategory";
import { useEffect, useState } from "react";

const ProductTypeCategories = () => {
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        getData();
    }, [currentPage]);

    const getData = () => {
        fetch(
            `${process.env.REACT_APP_HOST_IP}/product-types?page=${currentPage}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCategories(data?.data);
                setTotalPage(data?.meta?.totalPage);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div id='ProductTypeCategories'>
            <CategoriesHeader
                categoriesType={"Danh mục loại sản phẩm"}
                type={"product-types"}
            />
            <CategoriesList categories={categories} type={"product-types"} />
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

export default ProductTypeCategories;
