import CurrencyFormat from "react-currency-format";

const ProductItem = ({
    prodId,
    prodName,
    prodImg,
    prodSellPrice,
    prodBuyPrice,
    prodInventory,
    prodCategory,
    getProducts,
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
            <td>{prodId}</td>
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
            <td>
                Chỉnh sửa<i className='fa-solid fa-pencil'></i>
            </td>
            <td onClick={handleDelete}>
                Xóa<i className='fa-solid fa-pencil'></i>
            </td>
        </tr>
    );
};

export default ProductItem;
