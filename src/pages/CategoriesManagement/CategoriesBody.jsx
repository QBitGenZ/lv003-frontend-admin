import { Categories } from "../../common/json/Categories";
import CategoryItem from "./CategoryItem";

const CategoriesBody = ({ onClick }) => {
    return (
        <div id='CategoriesBody'>
            <table className='categories-body'>
                <tr>
                    <th>Mã danh mục</th>
                    <th>Danh mục</th>
                    <th>Số lượng SP</th>
                    <th>Chỉnh sửa</th>
                </tr>
                {Categories.map((category) => (
                    <CategoryItem
                        categoryID={category.categoryID}
                        categoryName={category.categoryName}
                        productQuantity={category.productQuantity}
                        editClicked={onClick}
                    />
                ))}
            </table>
        </div>
    );
};

export default CategoriesBody;
