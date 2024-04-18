import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useLayoutEffect, useState } from "react";

const EditProduct = ({ productId, handleBackButtonClicked }) => {
    const [name, setName] = useState();
    const [type, setType] = useState();
    const [origin, setOrigin] = useState();
    const [volume, setVolume] = useState();
    const [weight, setWeight] = useState();
    const [brand, setBrand] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [cost, setCost] = useState();
    const [quantity, setQuantity] = useState();
    let [tags, setTags] = useState();
    const [images, setImages] = useState();
    const [expiryDate, setExpiryDate] = useState();
    const [productionDate, setProductionDate] = useState();

    const [types, setTypes] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        getProductTypes();
        getBrand();
        getProducts();
    }, []);

    const getProductTypes = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/product-types`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setTypes(data.data);
            })
            .catch((error) => console.log(error));
    };

    const getBrand = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/brands`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setBrand(data?.data[0]?._id);
            })
            .catch((error) => console.log(error));
    };

    const getProducts = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/products/${productId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                Accept: "application/json",
            },
        })
            .then((res) =>
                res.status === 200 ? res.json() : Promise.reject(res.json())
            )
            .then((data) => {
                console.log(data?.data);
                setName(data?.data?.name);
                setType(data?.data?.type);
                setOrigin(data?.data?.origin);
                setVolume(data?.data?.volume);
                // setWeight(data?.data?.weight);
                setBrand(data?.data?.brand);
                setDescription(data?.data?.description);
                setPrice(data?.data?.price);
                setCost(data?.data?.cost);
                setQuantity(data?.data?.quantity);
                setTags(data?.data?.tags.join(" "));
                setImages(data?.data?.images);
                // setExpiryDate(data?.data?.expiryDate);
                // setProductionDate(data?.data?.productionDate);
            })
            .catch((error) => alert(error));
    };

    const updateData = () => {
        const formData = new FormData();

        formData.append("name", name);
        formData.append("brand", brand);
        formData.append("type", type);
        formData.append("origin", origin);
        formData.append("volume", volume);
        formData.append("quantity", quantity);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("cost", cost);
        formData.append("tags", JSON.stringify(tags.split(" ")));
        images.forEach((image, index) => {
            formData.append(`images`, image);
        });

        fetch(`${process.env.REACT_APP_HOST_IP}/products`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("ok");
                alert("Sửa thành công");
                window.location.reload();
            })
            .catch((error) => console.log(error));
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeBrand = (e) => {
        setBrand(e.target.value);
    };

    const handleChangeOrigin = (e) => {
        setOrigin(e.target.value);
    };

    const handleChangeWeight = (e) => {
        setWeight(e.target.value);
    };

    const handleChangeVolume = (e) => {
        setVolume(e.target.value);
    };

    const handleChangeQuantity = (e) => {
        setQuantity(e.target.value);
    };

    const handleChangeProductionDate = (e) => {
        setProductionDate(e.target.value);
    };

    const handleChangeExpiry = (e) => {
        setExpiryDate(e.target.value);
    };

    const handleChangeDescription = (event, editor) => {
        const data = editor.getData();
        setDescription(data);
    };

    const handleChangePrice = (e) => {
        setPrice(e.target.value);
    };

    const handleChangeCost = (e) => {
        setCost(e.target.value);
    };

    const handleChangeType = (e) => {
        setType(e.target.value);
    };

    const handleChangeTags = (e) => {
        setTags(e.target.value);
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
        loadImg(files); // Truyền danh sách các tệp tin đã chọn vào hàm loadImg
    };

    const loadImg = (files) => {
        // Thay đổi tham số của hàm loadImg để nhận danh sách các tệp tin
        const file = files[0]; // Chỉ lấy ảnh đầu tiên từ danh sách các tệp tin
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imageDataUrl = event.target.result;
                document.getElementById("inputImg").src = imageDataUrl; // Đặt src của ảnh là đường dẫn dữ liệu của ảnh mới
            };
            reader.readAsDataURL(file); // Đọc ảnh dưới dạng URL dữ liệu
        }
    };

    return (
        <div id='EditProduct'>
            <div className='back-button' onClick={handleBackButtonClicked}>
                <i class='fa-solid fa-chevron-left'></i> Trở về
            </div>
            <div className='edit-prod-body'>
                <div className='edit-prod-body-left'>
                    <input
                        id='imgFile'
                        type='file'
                        onChange={handleImageChange}
                        multiple></input>
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
                            value={name}
                            onChange={handleChangeName}></input>

                        <label htmlFor='brand'>Nhãn hàng</label>
                        <select
                            id='brand'
                            type='text'
                            value={brand}
                            onChange={handleChangeBrand}>
                            {brands?.map((item) => {
                                return (
                                    <option
                                        value={item?._id}
                                        label={item?.name}
                                        key={item?._id}
                                    />
                                );
                            })}
                        </select>

                        <label htmlFor='origin'>Xuất xứ</label>
                        <input
                            id='origin'
                            type='text'
                            value={origin}
                            onChange={handleChangeOrigin}></input>

                        <label htmlFor='weight'>Trọng lượng</label>
                        <input
                            id='weight'
                            type='text'
                            value={weight}
                            onChange={handleChangeWeight}></input>

                        <label htmlFor='volume'>Dung tích</label>
                        <input
                            id='volume'
                            type='text'
                            value={volume}
                            onChange={handleChangeVolume}></input>

                        <label htmlFor='quantity'>Số lượng</label>
                        <input
                            id='quantity'
                            type='text'
                            value={quantity}
                            onChange={handleChangeQuantity}></input>

                        <label htmlFor='productionDate'>Ngày sản xuất</label>
                        <input
                            id='productionDate'
                            type='date'
                            value={productionDate}
                            onChange={handleChangeProductionDate}></input>

                        <label htmlFor='expiryDate'>Ngày hết hạn</label>
                        <input
                            id='expiryDate'
                            type='date'
                            value={expiryDate}
                            onChange={handleChangeExpiry}></input>

                        <label>Mô tả</label>
                        <CKEditor
                            editor={ClassicEditor}
                            data={description}
                            onChange={handleChangeDescription}
                        />

                        <label htmlFor='prod-sell-price'>Giá bán</label>
                        <input
                            id='prod-sell-price'
                            type='text'
                            value={price}
                            onChange={handleChangePrice}></input>

                        <label htmlFor='prod-buy-price'>Giá mua</label>
                        <input
                            id='prod-buy-price'
                            type='text'
                            value={cost}
                            onChange={handleChangeCost}></input>

                        <label htmlFor='prod-category'>Loại sản phẩm</label>
                        <select
                            id='prod-category'
                            value={type}
                            onChange={handleChangeType}>
                            {types?.map((item) => {
                                return (
                                    <option
                                        value={item?._id}
                                        label={item?.name}
                                        key={item?.id}
                                    />
                                );
                            })}
                        </select>

                        <label htmlFor='prod-tag'>Tag</label>
                        <input
                            id='prod-tag'
                            type='text'
                            value={tags}
                            onChange={handleChangeTags}></input>
                    </div>
                    <div className='edit-prod-btn-wrapper'>
                        <button
                            className='cancel-btn'
                            onClick={handleBackButtonClicked}>
                            Hủy bỏ
                        </button>
                        <button className='approve-btn' onClick={updateData}>
                            Đồng ý
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
