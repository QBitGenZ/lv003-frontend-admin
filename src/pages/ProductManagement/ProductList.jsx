import { ProductData } from "../../common/json/ProductData";
import ProductDetail from "./ProductDetail";

const ProductList = () => {
    return (
        <div id='ProductList'>
            <table>
                <tr>
                    <th>Mã SP</th>
                    <th>Sản phẩm</th>
                    <th>Giá bán</th>
                    <th>Giá mua</th>
                    <th>Tồn kho</th>
                    <th>Danh mục</th>
                    <th>Chỉnh sửa</th>
                </tr>
                {ProductData.map((item) => (
                    <ProductDetail
                        prodId={item.ProductNo}
                        prodName={item.ProductDescription}
                        prodImg={item?.ProductImage[0]}
                        prodSellPrice={item.ProductPrice}
                        prodBuyPrice={item.ProductSaledPrice}
                        prodInventory={item.ProductInventory}
                        prodCategory={"Danh mục"}
                    />
                ))}
            </table>
        </div>
    );
};

export default ProductList;
