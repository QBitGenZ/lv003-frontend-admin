import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

const ProductManagementBody = () => {
    return (
        <div id='ProductManagementBody'>
            <div className='left-side'>
                <div className='button add-prod-btn'>Thêm sản phẩm</div>
                <ProductFilter />
            </div>
            <div className='right-side'>
                <ProductList />
            </div>
        </div>
    );
};

export default ProductManagementBody;
