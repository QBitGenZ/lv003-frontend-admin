import { useEffect, useState } from "react";
import CategoriesList from "./CategoriesList";
import EditCategory from "./EditCategory";

const CategoriesWrapper = () => {
    const [showEditCategories, setShowEditCategories] = useState(false);

    const [categories, setCategories] = useState([]);

    const handleAddCategoryClicked = () => {
        setShowEditCategories(!showEditCategories);
    };

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/product-types`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCategories(data?.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div id='CategoriesWrapper'>
            <div className='categories-left-side'>
                <div className='categories-header'>
                    <div className='categories-title'>
                        Danh mục loại sản phẩm
                    </div>
                    <div
                        className={
                            "add-category-btn " +
                            (showEditCategories && "active")
                        }
                        onClick={handleAddCategoryClicked}>
                        Thêm mới
                    </div>
                </div>
                <CategoriesList
                    onClick={handleAddCategoryClicked}
                    catagories={categories}
                />
            </div>
            <div className='categories-right-side'>
                {showEditCategories && (
                    <EditCategory cancelClicked={handleAddCategoryClicked} />
                )}
            </div>
        </div>
    );
};

export default CategoriesWrapper;
