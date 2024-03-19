import FilterOption from "./FilterOption";

const ProductFilter = () => {
    const options = ["Option1", "Option2", "Option3", "Option4"];

    return (
        <div id='ProductFilter'>
            <FilterOption header={"Filters"} options={options} />
            <div className='seperate-line'></div>
            <FilterOption header={"Filter"} options={options} />
            <div className='seperate-line'></div>
            <FilterOption header={"Filter"} options={options} />
        </div>
    );
};

export default ProductFilter;
