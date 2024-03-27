import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";

const EditProduct = ({ product, handleBackButtonClicked }) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("65fdb83059974c11e6eca655");
    const [origin, setOrigin] = useState("");
    const [volume, setVolume] = useState("");
    const [weight, setWeight] = useState("");
    const [utility, setUtility] = useState("");
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("bla bla");
    const [price, setPrice] = useState(0);
    const [cost, setCost] = useState(0);
    const [quantity, setQuantity] = useState("");
    const [tags, setTags] = useState(["bla bla", "blaaaala"]);
    const [images, setImages] = useState("");
    const [productionDate, setProductionDate] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [sale, setSale] = useState("");

    const handleSubmit = () => {
        console.log("name: " + name);

        const formData = new FormData();

        formData.append("name", name);
        formData.append("type", type);
        formData.append("origin", origin);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("cost", cost);
        formData.append("tags", tags);
        formData.append("images", images);

        fetch("http://localhost:3000/v1/products", {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => console.log("ok"))
            .catch((error) => console.log(error));
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeOrigin = (e) => {
        setOrigin(e.target.value);
    };

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
                                images
                                    ? URL.createObjectURL(images)
                                    : process.env.PUBLIC_URL +
                                      "/images/input_img.png"
                            }></img>
                    </label>
                </div>

                <div className='edit-prod-body-right'>
                    <div className='edit-prod-form'>
                        <label htmlFor='prod-name'>Tên sản phẩm</label>
                        <input
                            id='prod-name'
                            type='text'
                            value={name}
                            onChange={handleChangeName}></input>
                        <label htmlFor='origin'>Nguồn gốc</label>
                        <input
                            id='origin'
                            type='text'
                            value={origin}
                            onChange={handleChangeOrigin}></input>
                        <label>Mô tả</label>
                        <CKEditor
                            editor={ClassicEditor}
                            data={description}
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
                            value={price}></input>
                        <label htmlFor='prod-buy-price'>Giá mua</label>
                        <input
                            id='prod-buy-price'
                            type='text'
                            value={cost}></input>
                        <label htmlFor='prod-category'>Danh mục</label>
                        <input
                            id='prod-category'
                            type='text'
                            value={type}></input>
                        <label htmlFor='prod-tag'>Tag</label>
                        <input id='prod-tag' type='text' value={tags}></input>
                    </div>
                    <div className='edit-prod-btn-wrapper'>
                        <button className='cancel-btn'>Hủy bỏ</button>
                        <button className='approve-btn' onClick={handleSubmit}>
                            Đồng ý
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
