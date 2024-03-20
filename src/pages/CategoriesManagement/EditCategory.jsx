import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditCategory = ({ category, cancelClicked }) => {
    return (
        <div id='EditCategory'>
            <div className='edit-category-header'>Thông tin danh mục</div>
            <div className='edit-category-body'>
                <label htmlFor='category-name'>Tên danh mục</label>
                <input
                    id='category-name'
                    type='text'
                    value={category?.categoryName}></input>
                <CKEditor
                    editor={ClassicEditor}
                    data={category?.categoryDescription}
                    onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event) => {
                        console.log(event);
                    }}
                    onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                    }}
                />
                <div className='edit-catagory-btn-container'>
                    <div className='cancel-btn' onClick={cancelClicked}>
                        Hủy
                    </div>
                    <div className='approve-btn'>Lưu</div>
                </div>
            </div>
        </div>
    );
};

export default EditCategory;
