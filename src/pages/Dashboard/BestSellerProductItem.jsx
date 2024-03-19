const BestSellerProductItem = ({
    prodId,
    prodImgURL,
    prodName,
    prodQuantity,
    prodRevenue,
}) => {
    return (
        <>
            <tr>
                <td className='product-code'>{prodId}</td>
                <td className='product-name'>
                    <img src={prodImgURL}></img>
                    {prodName}
                </td>
                <td className='product-quantity'>{prodQuantity}</td>
                <td className='product-revenue'>{prodRevenue}</td>
            </tr>
        </>
    );
};

export default BestSellerProductItem;
