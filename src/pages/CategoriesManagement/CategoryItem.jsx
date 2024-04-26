import QRCode from "react-qr-code";
import { useState } from "react";
import EditCategory from "./EditCategory";
import EditBrand from "./EditBrand";

const CategoryItem = ({ categoryID, categoryName, type }) => {
    const [isShowEditCategory, setIsShowEditCategory] = useState(false);

    const handleRemoveCategory = () => {
        type === "brands" ? removeBrand() : removeProductType();
    };

    const removeBrand = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/brands/${categoryID}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status === 204) {
                    alert("Xóa thành công");
                    window.location.reload();
                } else {
                    return Promise.reject("Lỗi!!!");
                }
            })
            .catch((error) => {
                alert(error);
            });
    };

    const removeProductType = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/product-types/${categoryID}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status === 204) {
                    alert("Xóa thành công");
                    window.location.reload();
                } else {
                    return Promise.reject("Lỗi!!!");
                }
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <tr className='category-item'>
            <td>
                <QRCode
                    className='qrcode'
                    size={32}
                    value={categoryID}
                    viewBox={`0 0 256 256`}
                />
            </td>
            <td style={{ textAlign: "start" }}>{categoryName}</td>
            <td
                className='edit-category'
                onClick={() => setIsShowEditCategory(true)}>
                Chỉnh sửa <i class='fa-solid fa-pencil'></i>
            </td>
            <td
                className='remove-category'
                onClick={() => handleRemoveCategory()}>
                Xóa <i class='fa-solid fa-trash'></i>
            </td>
            {isShowEditCategory && (
                <div id='category-wrapper'>
                    {type === "brands" ? (
                        <EditBrand
                            categoryID={categoryID}
                            cancelClicked={() => setIsShowEditCategory(false)}
                        />
                    ) : (
                        <EditCategory
                            categoryID={categoryID}
                            cancelClicked={() => setIsShowEditCategory(false)}
                        />
                    )}
                </div>
            )}
        </tr>
    );
};
export default CategoryItem;
