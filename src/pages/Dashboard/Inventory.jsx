const Inventory = () => {
    return (
        <div id='Inventory'>
            <div className='inventory-prod-title'>Hàng tồn kho</div>
            <table className='inventory-prod-body'>
                <tr>
                    <th>Mã SP</th>
                    <th>Sản phẩm</th>
                    <th>Số lượng</th>
                </tr>
            </table>
        </div>
    );
};

export default Inventory;
