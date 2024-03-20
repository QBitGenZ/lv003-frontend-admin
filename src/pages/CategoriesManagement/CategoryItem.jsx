const CategoryItem = ({
    categoryID,
    categoryName,
    productQuantity,
    editClicked,
}) => {
    return (
        <tr>
            <td>{categoryID}</td>
            <td>{categoryName}</td>
            <td>{productQuantity}</td>
            <td className='edit-category' onClick={editClicked}>
                Chỉnh sửa<i class='fa-solid fa-pencil'></i>
            </td>
        </tr>
    );
};
export default CategoryItem;
