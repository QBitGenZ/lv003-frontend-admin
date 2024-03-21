import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditProduct = ({ product, handleBackButtonClicked }) => {
    const loadImg = (e) => {
        const [file] = e.target.files;
        if (file) {
            document.getElementById("inputImg").src = URL.createObjectURL(file);
        }
    };

    return (
        <div id='EditProduct'>
            <div className='back-button' onClick={handleBackButtonClicked}>
                <i class='fa-solid fa-chevron-left'></i> Trở về
            </div>
            <div className='edit-prod-body'>
                <div className='edit-prod-body-left'>
                    <input id='imgFile' type='file' onChange={loadImg}></input>
                    <label htmlFor='imgFile' className='input-img'>
                        <img
                            id='inputImg'
                            src={
                                process.env.PUBLIC_URL + "/images/input_img.png"
                            }></img>
                    </label>
                </div>
                <div className='edit-prod-body-right'>
                    <div className='edit-prod-form'>
                        <label htmlFor='prod-name'>Tên sản phẩm</label>
                        <input
                            id='prod-name'
                            type='text'
                            value={product?.ProductDescription}></input>
                        <label>Mô tả</label>
                        <CKEditor
                            editor={ClassicEditor}
                            data={product?.ProductDescription}
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
                        <label htmlFor='prod-sell-price'>Giá bán</label>
                        <input
                            id='prod-sell-price'
                            type='text'
                            value={product?.ProductPrice}></input>
                        <label htmlFor='prod-buy-price'>Giá mua</label>
                        <input
                            id='prod-buy-price'
                            type='text'
                            value={product?.ProductSaledPrice}></input>
                        <label htmlFor='prod-category'>Danh mục</label>
                        <input
                            id='prod-category'
                            type='text'
                            value={product?.ProductType}></input>
                        <label htmlFor='prod-tag'>Tag</label>
                        <input
                            id='prod-tag'
                            type='text'
                            value={product?.ProductTag}></input>
                    </div>
                    <div className='edit-prod-btn-wrapper'>
                        <button className='cancel-btn'>Hủy bỏ</button>
                        <button className='approve-btn'>Đồng ý</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
