import CategoryItem from "./CategoryItem";

const CategoriesList = ({ categories, type }) => {
    return (
        <div id='CategoriesList'>
            <table className='categories-list'>
                <tr>
                    <th>Mã danh mục</th>
                    <th>Danh mục</th>
                    <th>Chỉnh sửa</th>
                    <th>Xóa danh mục</th>
                </tr>
                {categories?.map((category) => (
                    <CategoryItem
                        categoryID={category?._id}
                        categoryName={category?.name}
                        type={type}
                    />
                ))}
            </table>
        </div>
    );
};

export default CategoriesList;
