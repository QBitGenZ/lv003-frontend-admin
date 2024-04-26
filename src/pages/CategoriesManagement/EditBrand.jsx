import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";

const EditBrand = ({ categoryID, cancelClicked }) => {
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_HOST_IP}/brands/${categoryID}`, {
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
                setName(data?.data?.name);
                setText(data?.data?.text);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const updateBrand = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/brands/${categoryID}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                text: text,
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
        setName(event.target.value);
    };

    const handleChangeDescription = (event, editor) => {
        const data = editor.getData();
        setText(data);
    };

    return (
        <div id='EditBrand'>
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
                    Chỉnh sửa nhãn hàng
                </span>
            </div>
            <div className='edit-category-body'>
                <label htmlFor='category-name'>Tên danh mục</label>
                <input
                    id='category-name'
                    type='text'
                    value={name}
                    onChange={(event) => {
                        handleChangeName(event);
                    }}></input>
                <label htmlFor='category-description'>Mô tả</label>
                <CKEditor
                    id={"category-description"}
                    editor={ClassicEditor}
                    data={text}
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
                        onClick={() => updateBrand()}>
                        Lưu
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditBrand;
