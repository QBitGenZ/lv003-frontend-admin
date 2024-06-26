import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";

const EditCategory = ({ categoryID, cancelClicked }) => {
    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_HOST_IP}/product-types/${categoryID}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCategoryName(data?.data?.name);
                setCategoryDescription(data?.data?.description);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const updateProductType = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/product-types/${categoryID}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: categoryName,
                description: categoryDescription,
            }),
        })
            .then((res) => {
                if (res.status === 200) {
                    alert("Cập nhật thành công");
                    window.location.reload();
                } else {
                    Promise.reject("Lỗi!!!");
                }
            })
            .catch((error) => {
                alert(error);
            });
    };

    const handleChangeName = (event) => {
        setCategoryName(event.target.value);
    };

    const handleChangeDescription = (event, editor) => {
        const data = editor.getData();
        setCategoryDescription(data);
    };

    return (
        <div id='EditCategory'>
            <div className='edit-category-header'>
                <span className='cancel-edit' onClick={() => cancelClicked()}>
                    <i class='fa-solid fa-chevron-left'></i> Trở về
                </span>
                <span
                    style={{
                        textTransform: "uppercase",
                        fontWeight: "600",
                        marginLeft: "-2rem",
                    }}>
                    Chỉnh sửa loại sản phẩm
                </span>
            </div>
            <div className='edit-category-body'>
                <label htmlFor='category-name'>Tên danh mục</label>
                <input
                    id='category-name'
                    type='text'
                    value={categoryName}
                    onChange={(event) => {
                        handleChangeName(event);
                    }}></input>
                <label htmlFor='category-description'>Mô tả</label>
                <CKEditor
                    id={"category-description"}
                    editor={ClassicEditor}
                    data={categoryDescription}
                    onChange={handleChangeDescription}
                />
                <div className='edit-catagory-btn-container'>
                    <div
                        className='cancel-btn button'
                        onClick={() => cancelClicked()}>
                        Hủy
                    </div>
                    <div
                        className='approve-btn button'
                        onClick={() => updateProductType()}>
                        Lưu
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditCategory;
