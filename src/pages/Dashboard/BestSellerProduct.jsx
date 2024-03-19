import BestSellerProductItem from "./BestSellerProductItem";
import { ProductData } from "../../common/json/ProductData";

const BestSellerProduct = () => {
    return (
        <div id='BestSellerProduct'>
            <div className='best-seller-prod-title'>
                Sản phẩm bán chạy
                <span className='sub-title'>
                    <i class='fa-solid fa-check check-icon'></i>
                    30 ngày qua
                </span>
            </div>
            <table className='best-seller-prod-body'>
                <tr>
                    <th>Mã SP</th>
                    <th>Sản phẩm</th>
                    <th>Số lượng bán</th>
                    <th>Doanh thu</th>
                </tr>
                {ProductData.map((prod) => (
                    <BestSellerProductItem
                        prodId={prod.ProductNo}
                        prodImgURL={
                            process.env.PUBLIC_URL + prod?.ProductImage[0]
                        }
                        prodName={prod.ProductDescription}
                        prodQuantity={prod.ProductInventory}
                        prodRevenue={"1.200.000"}
                    />
                ))}
            </table>
        </div>
    );
};

export default BestSellerProduct;
