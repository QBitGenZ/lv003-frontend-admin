import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const ExpiredProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getExpiredProducts();
    }, []);

    const getExpiredProducts = () => {
        fetch(`${process.env.REACT_APP_HOST_IP}/statistics/expired-products`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setProducts(data?.data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const formatDateFromMongo = (date) => {
        // Giả sử bạn có một biến dateStr lưu trữ dữ liệu từ MongoDB
        const dateStrFromMongoDB = date;

        // Chuyển đổi định dạng từ MongoDB sang JavaScript Date object
        const dateObj = new Date(dateStrFromMongoDB);

        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần cộng thêm 1
        const year = dateObj.getFullYear();

        // Chuyển đổi định dạng JavaScript Date object thành yyyy-MM-dd
        return `${month.toString().padStart(2, "0")} / ${day
            .toString()
            .padStart(2, "0")} / ${year}`;
    };

    return (
        <div id='ExpiredProduct'>
            <div className='best-seller-prod-title'>Sản phẩm hết hạn</div>
            <table className='best-seller-prod-body'>
                <tr>
                    <th>Mã SP</th>
                    <th>Sản phẩm</th>
                    <th>Ngày hết hạn</th>
                </tr>
                {products?.map((prod) => {
                    return (
                        <tr>
                            <td style={{ textAlign: "center" }}>
                                <QRCode
                                    size={64}
                                    className='qrcode'
                                    value={prod?._id}
                                    viewBox={`0 0 256 256`}
                                />
                            </td>
                            <td>{prod?.name}</td>
                            <td style={{ textAlign: "center" }}>
                                {formatDateFromMongo(prod?.expiryDate)}
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default ExpiredProduct;
