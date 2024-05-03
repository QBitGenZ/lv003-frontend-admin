import QRCode from "react-qr-code";

const UserInfor = ({
    userID,
    userName,
    userPhone,
    userGender,
    userAge,
    onClick,
}) => {
    function calculateAge(dateString) {
        const birthday = new Date(dateString);
        const today = new Date();
        const currentYear = today.getFullYear();
        const birthYear = birthday.getFullYear();

        // Tính tuổi theo năm
        let age = currentYear - birthYear;

        return age;
    }

    return (
        <tr id={userID} onClick={onClick}>
            <td>
                <QRCode
                    className='qrcode'
                    size={32}
                    value={userID}
                    viewBox={`0 0 256 256`}
                />
            </td>
            <td>{userName}</td>
            <td>{userPhone}</td>
            <td>{userGender === "Male" ? "Nam" : "Nữ"}</td>
            <td>{calculateAge(userAge)}</td>
        </tr>
    );
};

export default UserInfor;
