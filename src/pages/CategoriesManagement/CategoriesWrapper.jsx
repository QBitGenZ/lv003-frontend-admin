import { useState } from "react";
import CategoriesBody from "./CategoriesBody";
import EditCategory from "./EditCategory";

const CategoriesWrapper = () => {
    const [showEditCategories, setShowEditCategories] = useState(false);

    const handleAddCategoryClicked = () => {
        setShowEditCategories(!showEditCategories);
    };

    return (
        <div id='CategoriesWrapper'>
            <div className='categories-left-side'>
                <div className='categories-header'>
                    <div className='categories-title'>Danh sách danh mục</div>
                    <div
                        className={
                            "add-category-btn " +
                            (showEditCategories && "active")
                        }
                        onClick={handleAddCategoryClicked}>
                        Thêm mới
                    </div>
                </div>
                <CategoriesBody onClick={handleAddCategoryClicked} />
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
