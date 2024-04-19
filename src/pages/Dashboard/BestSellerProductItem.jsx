import QRCode from "react-qr-code";

const BestSellerProductItem = ({ product }) => {
    return (
        <>
            <tr>
                <td className='product-code'>
                    <QRCode
                        className='qrcode'
                        size={32}
                        value={product?._id}
                        viewBox={`0 0 256 256`}
                    />
                </td>
                <td className='product-name'>{product?.name}</td>
                <td className='product-quantity'>{product?.quantitySold}</td>
                {/* <td className='product-revenue'>{}</td> */}
            </tr>
        </>
    );
};

export default BestSellerProductItem;
