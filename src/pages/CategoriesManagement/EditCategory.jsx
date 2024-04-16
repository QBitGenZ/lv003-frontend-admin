import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";

const EditCategory = ({ cancelClicked }) => {
    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");

    const postData = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/product-types`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: categoryName,
                description: categoryDescription,
            }),
        });

        window.location.reload();
    };

    const handleChangeDescription = (event, editor) => {
        const data = editor.getData();
        setCategoryDescription(data);
    };

    return (
        <div id='EditCategory'>
            <div className='edit-category-header'>Thông tin danh mục</div>
            <div className='edit-category-body'>
                <label htmlFor='category-name'>Tên danh mục</label>
                <input
                    id='category-name'
                    type='text'
                    value={categoryName}
                    onChange={(event) => {
                        setCategoryName(event.target.value);
                    }}></input>
                <CKEditor
                    editor={ClassicEditor}
                    data={categoryDescription}
                    onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                    }}
                    onChange={handleChangeDescription}
                />
                <div className='edit-catagory-btn-container'>
                    <div className='cancel-btn' onClick={cancelClicked}>
                        Hủy
                    </div>
                    <div className='approve-btn' onClick={postData}>
                        Lưu
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditCategory;
