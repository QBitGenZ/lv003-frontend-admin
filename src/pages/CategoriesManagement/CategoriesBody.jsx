import BrandCategories from "./BrandCategories";
import EditCategory from "./EditCategory";
import ProductTypeCategories from "./ProductTypeCategories";

const CategoriesBody = () => {
    return (
        <div id='CategoriesBody'>
            <ProductTypeCategories />
            <BrandCategories />
        </div>
    );
};

export default CategoriesBody;
