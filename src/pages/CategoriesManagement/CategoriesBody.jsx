import { Categories } from "../../common/json/Categories";
import CategoryItem from "./CategoryItem";

const CategoriesBody = ({ onClick, catagories }) => {
    return (
        <div id='CategoriesBody'>
            <table className='categories-body'>
                <tr>
                    <th>Mã danh mục</th>
                    <th>Danh mục</th>
                    {/* <th>Số lượng SP</th> */}
                    <th>Chỉnh sửa</th>
                </tr>
                {catagories.map((category) => (
                    <CategoryItem
                        categoryID={category?._id}
                        categoryName={category?.name}
                        productQuantity={category.productQuantity}
                        editClicked={onClick}
                    />
                ))}
            </table>
        </div>
    );
};

export default CategoriesBody;
