import QRCode from "react-qr-code";

const CategoryItem = ({
    categoryID,
    categoryName,
    productQuantity,
    editClicked,
}) => {
    return (
        <tr>
            <td>
                <QRCode
                    className='qrcode'
                    size={32}
                    value={categoryID}
                    viewBox={`0 0 256 256`}
                />
            </td>
            <td>{categoryName}</td>
            {/* <td>{productQuantity}</td> */}
            <td className='edit-category' onClick={editClicked}>
                Chỉnh sửa<i class='fa-solid fa-pencil'></i>
            </td>
        </tr>
    );
};
export default CategoryItem;
