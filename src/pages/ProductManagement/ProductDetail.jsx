const ProductDetail = ({
    prodId,
    prodName,
    prodImg,
    prodSellPrice,
    prodBuyPrice,
    prodInventory,
    prodCategory,
}) => {
    return (
        <tr>
            <td>{prodId}</td>
            <td className='prod-name'>
                <div className='prod-name-container'>
                    <img src={process.env.PUBLIC_URL + prodImg}></img>
                    {prodName}
                </div>
            </td>
            <td>{prodSellPrice}</td>
            <td>{prodBuyPrice}</td>
            <td>{prodInventory}</td>
            <td>{prodCategory}</td>
            <td>
                Chỉnh sửa <i class='fa-solid fa-pencil'></i>
            </td>
        </tr>
    );
};

export default ProductDetail;
