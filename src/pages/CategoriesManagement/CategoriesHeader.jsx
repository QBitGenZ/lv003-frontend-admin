import { useState } from "react";
import AddCategory from "./AddCategory";
import AddBrand from "./AddBrand";

const CategoriesHeader = ({ categoriesType, type }) => {
    const [isShowAddNewCategory, setIsShowAddNewCategory] = useState(false);

    const handleShowAddNewCategory = () => {
        setIsShowAddNewCategory(true);
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
    };

    return (
        <div id='CategoriesHeader'>
            <h1>{categoriesType}</h1>
            <div
                className='button add-new-category-btn'
                onClick={() => handleShowAddNewCategory()}>
                Thêm mới
            </div>
            {isShowAddNewCategory && (
                <div id='category-wrapper'>
                    {type === "brands" ? (
                        <AddBrand
                            setIsShowNewCategory={setIsShowAddNewCategory}
                        />
                    ) : (
                        <AddCategory
                            setIsShowNewCategory={setIsShowAddNewCategory}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default CategoriesHeader;
