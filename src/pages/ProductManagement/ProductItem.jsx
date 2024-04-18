import CurrencyFormat from "react-currency-format";
import QRCode from "react-qr-code";

const ProductItem = ({
    prodId,
    prodName,
    prodImg,
    prodSellPrice,
    prodBuyPrice,
    prodInventory,
    prodCategory,
    getProducts,
    handleClickEdit,
}) => {
    const handleDelete = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/products/${prodId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => getProducts())
            .catch((error) => alert(error));
    };

    return (
        <tr>
            <td>
                <QRCode
                    size={64}
                    className='qrcode'
                    value={prodId}
                    viewBox={`0 0 256 256`}
                />
            </td>
            <td className='prod-name'>
                <div className='prod-name-container'>
                    <img
                        src={`${process.env.REACT_APP_HOST_IMAGE_IP}/${prodImg}`}></img>
                    {prodName}
                </div>
            </td>
            <td>
                {" "}
                <CurrencyFormat
                    value={prodSellPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"VND"}
                    renderText={(value) => <div>{value}</div>}
                />
            </td>
            {/* <td>{prodBuyPrice}</td> */}
            <td>{prodInventory}</td>
            <td>{prodCategory}</td>
            <td id={prodId} onClick={handleClickEdit}>
                Chỉnh sửa<i className='fa-solid fa-pencil'></i>
            </td>
            <td onClick={handleDelete}>
                Xóa<i class='fa-solid fa-trash'></i>
            </td>
        </tr>
    );
};

export default ProductItem;
