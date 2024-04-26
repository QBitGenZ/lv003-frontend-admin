import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";

const Brand = ({ setIsShowNewCategory }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeDescription = (event, editor) => {
        const data = editor.getData();
        setDescription(data);
    };

    const handleCancelAddNewCategory = () => {
        setIsShowNewCategory(false);
        const body = document.querySelector("body");
        body.style.overflow = "auto";
    };

    const handleAddBrand = () => {
        postData();
    };

    const postData = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/brands`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                text: description,
            }),
        })
            .then(async (response) => {
                if (response.ok) {
                    alert("Thêm thành công");
                    window.location.reload();
                    return response.json();
                } else {
                    const error = await response.json();
                    console.log(error);
                    return error;
                }
            })
            .catch((error) => {
                alert("Thêm lỗi" + error.error);
                console.log(error);
            });
    };

    return (
        <div id='AddBrand'>
            <h1 className='add-category-header'>Thêm mới nhãn hàng</h1>
            <div className='add-category-body'>
                <form>
                    <label htmlFor='category-name'>Tên danh mục</label>
                    <input
                        id='category-name'
                        type='text'
                        onChange={(e) => setName(e.target.value)}></input>

                    <label htmlFor='category-desription'>Mô tả</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={description}
                        onChange={handleChangeDescription}
                    />
                </form>
                <div className='button-container'>
                    <div
                        className='approve-btn button'
                        onClick={() => handleAddBrand()}>
                        Đồng ý
                    </div>
                    <div
                        className='discard-btn button'
                        onClick={() => handleCancelAddNewCategory()}>
                        Hủy
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;
