import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

const ProductManagementBody = ({ handleAddProductClicked }) => {
    return (
        <div id='ProductManagementBody'>
            <div className='left-side'>
                <div
                    className='button add-prod-btn'
                    onClick={handleAddProductClicked}>
                    Thêm sản phẩm
                </div>
                <ProductFilter />
            </div>
            <div className='right-side'>
                <ProductList />
            </div>
        </div>
    );
};

export default ProductManagementBody;
