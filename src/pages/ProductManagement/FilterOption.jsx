const FilterOption = ({ header, options }) => {
    return (
        <div id='FilterOption'>
            <div className='filter-option-header'>
                <span className='filter-type'>{header}</span>
                <span className='remove-filter'>Xóa bộ lọc</span>
            </div>
            <div className='filter-option-body'>
                {options.map((value) => {
                    return (
                        <div className='option'>
                            <input id={value} type='checkbox'></input>
                            <label htmlFor={value}>{value}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FilterOption;
